type ResponseType = string | Blob | Error;

export default class ApiInstance {
  private requestInterceptors: Array<
    (init: RequestInit) => RequestInit | Promise<RequestInit>
  > = [];
  private responseInterceptors: Array<
    (response: Response) => Response | Promise<Response>
  > = [];

  constructor(
    private baseUrl: RequestInfo | URL,
    private baseInit: RequestInit = {}
  ) {}

  addRequestInterceptor(
    interceptor: (
      init: RequestInit
    ) => RequestInit | Promise<RequestInit>
  ) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(
    interceptor: (response: Response) => Response | Promise<Response>
  ) {
    this.responseInterceptors.push(interceptor);
  }
  private handleError(error: unknown) {
    return new Error(
      error instanceof Error
        ? error.message
        : "Something went wrong during the operation."
    );
  }

  private async request<T>(
    method: string,
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    const url = new URL(input.toString(), this.baseUrl.toString());
    let baseInit: RequestInit = { ...this.baseInit, ...init, method };

    for (const interceptor of this.requestInterceptors) {
      baseInit = await interceptor(baseInit);
    }

    try {
      const response = await fetch(url.toString(), baseInit);

      for (const interceptor of this.responseInterceptors) {
        await interceptor(response);
      }

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const contentType = response.headers.get("Content-Type") || "";

      if (contentType.includes("application/json"))
        return response.json();
      else if (contentType.includes("text/"))
        return response.text() as unknown as T;

      return response.blob() as unknown as T;
    } catch (error) {
      throw this.handleError(error) as never as T;
    }
  }

  protected tryCatchWrapper<T, K>(
    cb: (data: T) => Promise<K>
  ): (data: T) => Promise<K> {
    return async (data: T) => {
      try {
        return await cb(data);
      } catch (error) {
        throw this.handleError(error);
      }
    };
  }

  get<T>(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request("GET", input, init);
  }

  post<T>(
    url: string,
    body: unknown,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request<T>("POST", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  put<T>(
    url: string,
    body: unknown,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request<T>("PUT", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  delete<T>(
    url: string,
    init?: RequestInit
  ): Promise<T | ResponseType> {
    return this.request<T>("DELETE", url, init);
  }
}

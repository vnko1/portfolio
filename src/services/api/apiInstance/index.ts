interface IApiInstance {}

export default abstract class ApiInstance implements IApiInstance {
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

  private handleError(error: unknown) {
    return new Error(
      error instanceof Error
        ? error.message
        : "Something went wrong during the operation."
    );
  }

  private async requestWithTC<T>(
    method: string,
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | Error> {
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

      if (contentType.includes("application/json")) return response.json();
      else if (contentType.includes("text/"))
        return response.text() as unknown as T;

      return response.blob() as unknown as T;
    } catch (error) {
      throw this.handleError(error) as never as T;
    }
  }

  private async request<T>(
    method: string,
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T> {
    const url = new URL(input.toString(), this.baseUrl.toString());
    let baseInit: RequestInit = { ...this.baseInit, ...init, method };

    for (const interceptor of this.requestInterceptors) {
      baseInit = await interceptor(baseInit);
    }

    const response = await fetch(url.toString(), baseInit);

    for (const interceptor of this.responseInterceptors) {
      await interceptor(response);
    }

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const contentType = response.headers.get("Content-Type") || "";

    if (contentType.includes("application/json")) return response.json();
    else if (contentType.includes("text/"))
      return response.text() as unknown as T;

    return response.blob() as unknown as T;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected buildQueryString(params: Record<string, any>, prefix = ""): string {
    return Object.keys(params)
      .map((key) => {
        const value = params[key];
        const prefixedKey = prefix ? `${prefix}[${key}]` : key;

        if (typeof value === "object" && !Array.isArray(value)) {
          return this.buildQueryString(value, prefixedKey);
        } else if (Array.isArray(value)) {
          return value
            .map(
              (item, index) =>
                `${prefixedKey}[${index}]=${encodeURIComponent(item)}`
            )
            .join("&");
        } else {
          return `${prefixedKey}=${encodeURIComponent(value)}`;
        }
      })
      .join("&");
  }

  protected addRequestInterceptor(
    interceptor: (init: RequestInit) => RequestInit | Promise<RequestInit>
  ) {
    this.requestInterceptors.push(interceptor);
  }

  protected addResponseInterceptor(
    interceptor: (response: Response) => Response | Promise<Response>
  ) {
    this.responseInterceptors.push(interceptor);
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

  protected get<T>(input: RequestInfo | URL, init?: RequestInit) {
    return this.request<T>("GET", input, init);
  }

  protected post<T>(url: string, body: unknown, init?: RequestInit) {
    return this.request<T>("POST", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  protected put<T>(url: string, body: unknown, init?: RequestInit) {
    return this.request<T>("PUT", url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
      },
    });
  }

  protected delete<T>(url: string, init?: RequestInit) {
    return this.request<T>("DELETE", url, init);
  }
}

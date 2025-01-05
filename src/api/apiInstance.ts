export default class ApiInstance {
  constructor(private baseUrl: RequestInfo | URL) {}

  async request<T>(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<T | string | Blob | Error> {
    try {
      const url =
        this.baseUrl instanceof URL
          ? new URL(input.toString(), this.baseUrl)
          : `${this.baseUrl}${input}`;

      const response = await fetch(url, init);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const contentType = response.headers.get("Content-Type") || "";

      if (contentType.includes("application/json"))
        return response.json();
      else if (contentType.includes("text/")) return response.text();

      return response.blob();
    } catch (error) {
      console.error(error);
      return new Error(
        error instanceof Error
          ? error.message
          : "Something went wrong during the API request."
      );
    }
  }

  protected tryCatchWrapper<T, K>(
    cb: (data: T) => Promise<K>
  ): (data: T) => Promise<K> {
    return async (data: T) => {
      try {
        return await cb(data);
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : "Something went wrong during the operation."
        );
      }
    };
  }
}

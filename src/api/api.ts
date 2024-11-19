import { CustomError } from "@/services/CustomError";
import { IApiError } from "@/types/error.types";

export abstract class Api {
  constructor(private baseUrl: string) {}

  protected async tryCatchWrapper<T, K>(
    cb: (data?: T) => Promise<K | IApiError>
  ) {
    return async function (data: T) {
      try {
        return await cb(data);
      } catch (error) {
        if (error instanceof CustomError) {
          return error;
        }

        if (error instanceof Error) {
          return new CustomError({
            statusCode: 500,
            path: "Unknown Path",
            errorType: "Unknown Error",
            errorMessage: error.message,
          });
        }
      }
    };
  }

  protected async request<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, init);
    const data = await response.json();

    if (!response.ok) {
      throw new CustomError(data);
    }

    return data;
  }
}

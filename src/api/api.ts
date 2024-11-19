import axios, {
  AxiosError,
  AxiosInstance,
  CreateAxiosDefaults,
  isAxiosError,
} from "axios";

export abstract class Api {
  instance: AxiosInstance;
  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config);
  }

  protected tryCatchWrapper<T, K>(
    cb: (data: T) => Promise<K | AxiosError | Error>
  ) {
    return async function (data: T) {
      try {
        return await cb(data);
      } catch (error) {
        if (isAxiosError(error)) return error;
        return new Error("Something wrong!");
      }
    };
  }
}

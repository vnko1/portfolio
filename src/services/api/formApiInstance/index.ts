import ApiInstance from "../apiInstance";

export default class FormApiInstance extends ApiInstance {
  constructor(baseUrl: RequestInfo | URL, baseInit: RequestInit = {}) {
    super(baseUrl, baseInit);
  }

  sendMessage(body: object) {
    return this.post("", body);
  }
}

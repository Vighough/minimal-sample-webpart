import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClientFactory } from "@microsoft/sp-http";
import { User } from "@microsoft/microsoft-graph-types";

export class GraphService {
  private _msGraphClientFactory: MSGraphClientFactory;

  constructor(private context: WebPartContext) {
    this._msGraphClientFactory = this.context.msGraphClientFactory;
  }

  public async getName(): Promise<User> {
    const graphClient = await this._msGraphClientFactory.getClient('3');

    return await graphClient.api("/me").version("v1.0").get();
  }
}

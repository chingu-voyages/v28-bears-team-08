import { Message } from "./";
import { Observer } from "rxjs";
import { View } from "../Modules";
import { QueryType } from "../Core";

export interface IUIDriver extends Observer<Message> {
  getRoute(route: String): Promise<View>;

  getData(
    query: QueryType,
    model: unknown,
    conditions: {},
    projection?: {},
    options?: {}
  ): Promise<unknown>;
}

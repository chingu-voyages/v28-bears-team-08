import { SystemComponents } from "./Broker";
import {
  ViewMessage,
  DataRequest,
  DataResponse,
  SecurityMessage,
  TransientMessage,
  Message,
} from "./Message";
import { View } from "../Modules";
import { QueryType } from "../Core";

export function createViewMessage(
  request: String,
  from: SystemComponents
): ViewMessage {
  return {
    from: from,
    to: SystemComponents.Controller,
    received: false,
    type: "View",
    request: request,
    response: new Promise<View>(() => {
      //do something
    }),
  };
}

export function createDataRequest(
  request: QueryType,
  from: SystemComponents,
  model: unknown,
  conditions: {},
  projection?: {},
  options?: {}
): DataRequest {
  return {
    type: "DataRequest",
    to: SystemComponents.DAO,
    model: model,
    conditions: conditions,
    projection: projection,
    options: options,
    from: from,
    received: false,
    request: request,
    response: new Promise<boolean>(() => {}),
  };
}

export function createDataResponse(
  msg: DataRequest,
  response: Promise<{}>
): DataResponse {
  return {
    type: "DataResponse",
    from: SystemComponents.DAO,
    to: msg.from,
    received: false,
    request: msg,
    response: response,
  };
}

export function createSecurityMessage(
  operation: "authenticate" | "authorize",
  from: SystemComponents
): SecurityMessage {
  return {
    type: "Security",
    operation: operation,
    from: from,
    to: SystemComponents.Security,
    received: false,
    request: "",
    response: new Promise<unknown>(() => {
      //do something
    }),
  };
}

export function createTransientMessage(msg: Message): TransientMessage {
  return {
    type: "Transient",
    request: msg,
    to: msg.to,
    from: msg.from,
    received: false,
  };
}

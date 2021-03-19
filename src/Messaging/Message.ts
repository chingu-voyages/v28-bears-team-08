import { View } from "../Modules";
import { SystemComponents } from "./CoreBroker";

/**
 * The base message type.
 */
export interface Message {
  type: String;
  // TODO: implement SystemComponent interface for Message routing purposes
  from: SystemComponents;
  to: SystemComponents;
  received: Boolean;
  request: Message | Function | String;
  response?: Promise<unknown>;
}

/**
 * A Message type for requests for data from the database.
 * Broker will prioritize routing first through auth check, then to DAO.
 */
export interface DataRequest extends Message {
  type: "DataRequest";
  to: SystemComponents.DAO;
}

/**
 * A Message type for responding to Data Requests.
 * This type flips the "to" and "from" fields from the original request,
 * includes the original request Message under "request", and the
 * retrieved data, as an array of Records, inside a Promise in the "response" field.
 */
export interface DataResponse extends Message {
  type: "DataResponse";
  Response: Promise<Array<Record<string, unknown>>>;
}

/**
 * A Message type for requests for security functions - auth, etc.
 * Broker will prioritize routing directly to Security system.
 */
export interface SecurityMessage extends Message {
  type: "Security";
  // the requested Security operation
  operation: "authenticate" | "authorize";
}

/**
 * A Message type that indicates Message needs further routing.
 * Used for hand-offs between Brokers.
 */
export interface TransientMessage extends Message {
  type: "Transient";
  // request type for this type of Message is another Message, to be sent to the final recipient
  request: Message;
}

/**
 * A Message type for passing Views between the UI, Controller, and Modules.
 * This Message type takes a String - the name of the particular View being requested -
 * as the "request" field.
 */
export interface ViewMessage extends Message {
  type: "View";
  request: String;
  // response type for this Message type is a Promise that resolves into a View
  response: Promise<View>;
}

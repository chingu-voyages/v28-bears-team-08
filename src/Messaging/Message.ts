import { IController } from "../Core";
import { AppModule } from "../Modules";

/**
 * The base message type.
 */
export interface Message {
  // TODO: implement SystemComponent interface for Message routing purposes
  from: unknown;
  to: unknown;
  request: Message | Function | String;
  response?: Promise<unknown>;
}

export interface BrokerMessage extends Message {
  from: IController | AppModule;
  to: "controller" | "module";
}

/**
 * A Message type for requests for data from the database.
 * Broker will prioritize routing first through auth check, then to DAO.
 */
export interface DataRequest extends Message {}

/**
 * A Message type for requests for security functions - auth, etc.
 * Broker will prioritize routing directly to Security system.
 */
export interface SecurityMessage extends Message {
  // the requested Security operation
  operation: "authenticate" | "authorize";
}

/**
 * A Message type that indicates Message needs further routing.
 * Used for hand-offs between Brokers.
 */
export interface TransientMessage extends Message {
  // request type for this type of Message is another Message, to be sent to the final recipient
  request: Message;
}

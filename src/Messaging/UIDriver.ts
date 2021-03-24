import { IUIDriver } from "./IUIDriver";
import { DataRequest, DataResponse, Message } from "./Message";
import {
  createDataRequest,
  createViewMessage,
  SystemComponents,
} from "../Messaging";
import { View } from "../Modules";
import { CoreBroker } from "./CoreBroker";
import { QueryType } from "../Core";

export class UIDriver implements IUIDriver {
  private static instance: UIDriver;
  private responseQueue: Map<DataRequest, DataResponse> = new Map<
    DataRequest,
    DataResponse
  >();

  private constructor() {}

  static get getInstance(): UIDriver {
    if (!this.instance) {
      this.instance = new UIDriver();
    }

    return this.instance;
  }

  /**
   * Method to retrieve a View from the Controller. Accepts a string for the name of the route and returns an
   * already resolved Promise containing a View.
   *
   * example call:
   *
   * driver.getRoute("/");   // would return a Promise containing the site index page
   *
   * @param route the name of the route as a string
   */
  async getRoute(route: String): Promise<View> {
    const prom = await CoreBroker.submit(
      createViewMessage(route, SystemComponents.UI)
    )
      .then((view: unknown) => {
        return view as View;
      })
      .catch();

    return Promise.resolve(prom);
  }

  /**
   * Method to request data from the backend. The particular query requested is provided
   * by the QueryType enum, currently in the DAO. Model refers to the type of data being
   * requested - User, Person, etc - and will be used to determine which collection to
   * search in the database. Conditions, projection, and options - the last two are
   * optional - all follow the same rules as queries in mongoose.
   *
   * example call:
   *
   * driver.getData(QueryTypes.find, "application", {_id: 123456}, {address: 1})
   *
   * will return a Promise containing the service address from application #123456
   *
   * @param query the requested operation from the database, represented by a key from the QueryType enum
   * @param model the type of data being requested
   * @param conditions main filters for the query
   * @param projection (optional) object declaring which fields from the resulting dataset to include
   * @param options (optional) object containing query-specific options
   *
   * @returns a Promise containing an object, representing the results of the query
   */
  async getData(
    query: QueryType,
    model: unknown,
    conditions: {},
    projection?: {},
    options?: {}
  ): Promise<{}> {
    const request = createDataRequest(
      query,
      SystemComponents.UI,
      model,
      conditions,
      projection,
      options
    );

    const prom = await CoreBroker.submit(request)
      .then((response: unknown) => {
        // block the executing thread until the response comes in
        let cont: boolean = true;
        do {
          if (response) {
            // response submitted
            if (this.responseQueue.get(request)) {
              // response received by responseQueue
              return this.responseQueue.get(request) as DataResponse;
            }
          }
        } while (cont);
      })
      .then((response) => {
        return response!.response;
      })
      .catch();

    // clear the response from the responseQueue
    this.responseQueue.delete(request);

    return Promise.resolve(prom);
  }

  /**
   * this method won't exist in production, it's only here to provide a mock
   * for the changed text in the starter app.
   *
   * in its current form, the starter react app runs with `npm run start`,
   * and the only change is the text below the graphic.
   *
   * see App.tsx, currently lines 6,7, and 14 for the relevant import and calls.
   *
   * changing the 'from' field below will change the text on the UI to whichever
   * component was set.
   */
  get(request: String): Message {
    return {
      from: SystemComponents.Controller,
      received: true,
      request: request,
      to: SystemComponents.UI,
      type: "",
    };
  }

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {
    if (value.type === "DataResponse") {
      this.responseQueue.set(
        value.request as DataRequest,
        value as DataResponse
      );
    }
  }
}

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

  async getData(
    query: QueryType,
    model: unknown,
    conditions: {},
    projection?: {},
    options?: {}
  ): Promise<unknown> {
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

    return Promise.resolve(prom);
  }
}

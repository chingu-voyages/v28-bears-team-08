import bunyan from "bunyan";
import dotenv from "dotenv";
import { Controller } from "./Core";

const log = bunyan.createLogger({ name: "STARTUP", level: "trace" });

function init() {
  dotenv.config();

  log.debug("Initializing Controller...");
  Controller.init();
  if (Controller.controller) {
    log.debug("Controller successfully initialized.");
  }
}

log.debug("Starting system...");
init();

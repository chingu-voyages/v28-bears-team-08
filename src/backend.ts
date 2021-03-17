import log from "loglevel";
import dotenv from "dotenv";
import {Controller} from "./Core";

function init() {
    dotenv.config();
    log.setLevel("trace");
    log.debug("Initializing Controller...");
    Controller.init();
    if (Controller.controller) {
        log.debug("Controller successfully initialized.");
    }
}

log.debug("Starting system...");
init();

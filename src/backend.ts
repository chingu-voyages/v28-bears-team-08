import log from "loglevel";
import {Controller} from "./Core";

function init() {
    log.setLevel("trace");
    log.debug("Initializing Controller...");
    Controller.init();
    if (Controller.controller) {
        log.debug("Controller successfully initialized.");
    }
}

log.debug("Starting system...");
init();

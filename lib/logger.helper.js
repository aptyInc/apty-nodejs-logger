"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const pinoInstance = (0, pino_1.default)({
    level: process.env.PINO_LOG_LEVEL || "info",
    timestamp: pino_1.default.stdTimeFunctions.isoTime
});
const console = {
    ...global.console,
    trace: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.TRACE_LOG_ENABLED == "true") {
            pinoInstance.trace(input);
        }
    },
    fatal: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.FATAL_LOG_ENABLED == "true") {
            pinoInstance.fatal(input);
        }
    },
    log: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.CONSOLE_LOG_ENABLED == "true") {
            pinoInstance.info(input);
        }
    },
    info: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.INFO_LOG_ENABLED == "true") {
            pinoInstance.info(input);
        }
    },
    warn: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.WARN_LOG_ENABLED == "true") {
            pinoInstance.warn(input);
        }
    },
    error: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.ERROR_LOG_ENABLED == "true") {
            pinoInstance.error(input);
        }
    },
    debug: (input) => {
        if (process.env.NODE_ENV == "development" || process.env.DEBUG_LOG_ENABLED == "true") {
            pinoInstance.debug(input);
        }
    }
};
global.console = console;
console.log("logger test trigger");
// export default console;
//# sourceMappingURL=logger.helper.js.map
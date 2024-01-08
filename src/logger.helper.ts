import pino from "pino";

const pinoInstance = pino({
  level: process.env.PINO_LOG_LEVEL || "info",
  timestamp: pino.stdTimeFunctions.isoTime
});

const console = {
  ...global.console,
  trace: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.TRACE_LOG_ENABLED == "true") {
      pinoInstance.trace(input);
    }
  },
  fatal: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.FATAL_LOG_ENABLED == "true") {
      pinoInstance.fatal(input);
    }
  },
  log: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.CONSOLE_LOG_ENABLED == "true") {
      pinoInstance.info(input);
    }
  },
  info: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.INFO_LOG_ENABLED == "true") {
      pinoInstance.info(input);
    }
  },
  warn: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.WARN_LOG_ENABLED == "true") {
      pinoInstance.warn(input);
    }
  },
  error: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.ERROR_LOG_ENABLED == "true") {
      pinoInstance.error(input);
    }
  },
  debug: (input: any) => {
    if (process.env.NODE_ENV == "development" || process.env.DEBUG_LOG_ENABLED == "true") {
      pinoInstance.debug(input);
    }
  }
};

global.console = console;
console.log("logger test trigger");
// export default console;






import winston from "winston";

// define the custom settings for each transport (file, console)

const dateFormat = () => new Date(Date.now()).toUTCString();

const options = {
  file: {
    level: "info",
    filename: "./logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],

  format: winston.format.printf((info) => {
    let message = `${dateFormat()} | ${info.level.toUpperCase()} | app.log | ${
      info.message
    } | `;
    message = info.obj
      ? `${message}data:${JSON.stringify(info.obj)} | `
      : message;
    return message;
  }),
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function`
logger.stream = {
  write(message) {
    // use the 'info' log level so
    // the output will be picked up by both transports(file and console)
    logger.info(message);
  },
};

export default logger;

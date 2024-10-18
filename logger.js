import { format, createLogger, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

// custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({level, message, timestamp}) => {
        return `${level}: ${message} at ${timestamp}`;
    })
)

// create a winston logger
const logger = createLogger({
    // info , warning , verbose -> levels
    level: 'info',
    format: combine(
        colorize(),
        timestamp(),
        json()
    ),
    // how I want to use the information whether console, save in file,or to datadog
    transports: [
        new transports.Console({
            format: consoleLogFormat
        }),
        new transports.File({filename: 'app.log'})
    ],
});

export default logger;
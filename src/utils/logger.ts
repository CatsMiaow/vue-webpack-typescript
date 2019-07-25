/**
 * Logs
 */
export class Logger {
  // tslint:disable:no-console
  public info(message: string): void {
    console.info(message);
  }

  public warn(message: string): void {
    console.warn(message);
  }

  public error(message: string): void {
    console.error(message);
  }
  // tslint:enable:no-console
}

export const logger: Logger = new Logger();

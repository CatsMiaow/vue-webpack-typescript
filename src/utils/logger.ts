/**
 * utils/logger.ts
 */
export class Logger {
  public info(message: string): void {
    console.info(message);
  }

  public warn(message: string): void {
    console.warn(message);
  }

  public error(message: string): void {
    console.error(message);
  }
}

export const logger: Logger = new Logger();

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as _ from 'lodash';

const MULTIPART_FORM = 'multipart/form-data';

interface LogData {
  body_type?: string;
  body?: Record<string, any>;
  query?: Record<string, any>;
  user?: Record<string, any>;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();

    this.logger.log(`Executing ${req.url} - ${req.method}`);

    const logData: LogData = {};

    // check if there is a file and avoid logging the buffer
    if (_.get(req.headers, 'content-type', '').includes(MULTIPART_FORM)) {
      logData.body_type = MULTIPART_FORM;
    }

    if (req.body && Object.keys(req.body).length > 0) {
      logData.body = req.body;
    }

    if (req.query && Object.keys(req.query).length > 0) {
      logData.query = req.query;
    }

    if (req.user && Object.keys(req.user).length > 0) {
      logData.user = req.user;
    }

    this.logger.debug(JSON.stringify(logData, null, 2));

    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `Executed ${req.url}. Execution time: ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}

import { LoaderService } from './loader/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(public loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.totalRequests++;
    this.loaderService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loaderService.setLoading(false);
        }
      })
    );
  }
}

import { HttpInterceptorFn } from '@angular/common/http';



export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  return next(
    req.clone({
      setHeaders: { 'X-API-KEY': '1234' },
    })
  );
};

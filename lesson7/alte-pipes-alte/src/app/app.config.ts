import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import ka from '@angular/common/locales/ka';
import ja from '@angular/common/locales/ja';

registerLocaleData(ka);
registerLocaleData(ja);


import { routes } from './app.routes';
import {registerLocaleData} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

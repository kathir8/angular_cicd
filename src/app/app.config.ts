import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConfigService } from './core/services/config.service';

function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
     {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializeApp,
      deps: [ConfigService]
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};

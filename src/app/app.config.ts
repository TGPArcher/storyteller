import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'page-one',
        component: PageOneComponent,
      },
      {
        path: 'page-two',
        component: PageTwoComponent,
      },
      {
        path: 'page-three',
        component: PageThreeComponent,
      },
    ]),
  ],
};

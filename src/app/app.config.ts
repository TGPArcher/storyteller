import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoryCatalogComponent } from './story-catalog/story-catalog.component';
import { StoryViewComponent } from './story-view/story-view.component';
import { Catalog } from './models/catalog';

export const STORY_BASE_PATH = new InjectionToken<string>('STORY_BASE_PATH');
export const IMAGE_EXTENSION = new InjectionToken<string>('IMAGE_EXTENSION');

export const CATALOG = new InjectionToken<Catalog>('CATALOG');
const catalog = {
  title: 'A very first demo title',
  description: 'A very first description of this catalog',
  stories: [
    {
      title: 'The first page of the rest of your life',
      id: 'demo_1',
    },
    {
      title: 'The second page of the rest of your life',
      id: 'demo_2',
    },
    {
      title: 'The third page of the rest of your life',
      id: 'demo_3',
    },
  ],
} as Catalog;

export const STORY_PATH_PARAM = 'id';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: StoryCatalogComponent,
      },
      {
        path: `:${STORY_PATH_PARAM}`,
        component: StoryViewComponent,
      },
    ]),
    {
      provide: CATALOG,
      useValue: catalog,
    },
    {
      provide: STORY_BASE_PATH,
      useValue: '/storyteller/assets/',
    },
    {
      provide: IMAGE_EXTENSION,
      useValue: 'png',
    },
  ],
};

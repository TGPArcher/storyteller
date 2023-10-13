import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { CATALOG, STORY_PATH_PARAM } from '../app.config';
import { Catalog } from '../models/catalog';
import { Story } from '../models/story';
import { ToStoryUrlPipe } from '../pipes/to-story-url.pipe';

interface ViewerData {
  previous?: Story;
  story?: Story;
  next?: Story;
}

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [NgIf, AsyncPipe, RouterLink, ToStoryUrlPipe],
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss'],
})
export class StoryViewComponent {
  private readonly catalog = inject(CATALOG);
  private readonly storyId$ = inject(ActivatedRoute).params.pipe(
    map((params) => params[STORY_PATH_PARAM] as string)
  );
  private readonly viewerData$ = this.storyId$.pipe(
    map((storyId) => this.getViewerData(this.catalog, storyId)),
    tap((viewerData) => this.handleStoryNotFound(viewerData.story))
  );

  protected readonly prevStoryId$: Observable<string | undefined> =
    this.viewerData$.pipe(map((viewerData) => viewerData.previous?.id));
  protected readonly nextStoryId$: Observable<string | undefined> =
    this.viewerData$.pipe(map((viewerData) => viewerData.next?.id));
  protected readonly story$: Observable<Story> = this.viewerData$.pipe(
    map((viewerData) => viewerData.story),
    filter(this.isStory)
  );

  private getViewerData(catalog: Catalog, storyId: string): ViewerData {
    const viewerData: ViewerData = {
      previous: undefined,
      story: undefined,
      next: undefined,
    };

    const storyIndex = catalog.stories.findIndex((s) => s.id === storyId);
    const storyNotFound = storyIndex === -1;

    if (storyNotFound) {
      return viewerData;
    }

    viewerData.story = catalog.stories[storyIndex];

    const hasPreviousStory = storyIndex > 0;
    if (hasPreviousStory) {
      viewerData.previous = catalog.stories[storyIndex - 1];
    }

    const hasNextStory = storyIndex < catalog.stories.length - 1;
    if (hasNextStory) {
      viewerData.next = catalog.stories[storyIndex + 1];
    }

    return viewerData;
  }

  private handleStoryNotFound(story: Story | undefined) {
    if (story === undefined) return; // redirect to catalog
  }

  private isStory(story: Story | undefined): story is Story {
    return story !== undefined;
  }
}

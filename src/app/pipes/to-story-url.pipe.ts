import { Pipe, PipeTransform, inject } from '@angular/core';
import { IMAGE_EXTENSION, STORY_BASE_PATH } from '../app.config';

@Pipe({
  name: 'toStoryUrl',
  standalone: true,
  pure: true,
})
export class ToStoryUrlPipe implements PipeTransform {
  private extension = inject(IMAGE_EXTENSION);
  private basePath = inject(STORY_BASE_PATH);

  transform(storyId: string): string {
    return this.basePath + storyId + '.' + this.extension;
  }
}

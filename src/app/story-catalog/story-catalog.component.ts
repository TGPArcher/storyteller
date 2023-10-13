import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATALOG } from '../app.config';
import { ToStoryUrlPipe } from '../pipes/to-story-url.pipe';

@Component({
  selector: 'app-story-catalog',
  standalone: true,
  imports: [NgFor, RouterLink, ToStoryUrlPipe],
  templateUrl: './story-catalog.component.html',
  styleUrls: ['./story-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCatalogComponent {
  protected readonly catalog = inject(CATALOG);
}

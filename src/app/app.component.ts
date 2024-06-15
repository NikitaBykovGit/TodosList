import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-screen surface-ground">
      <app-todos-page></app-todos-page>
    </div>
  `
})
export class AppComponent {
  title = 'TodosList';
}

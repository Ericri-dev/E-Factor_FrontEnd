import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-sidebar></app-sidebar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
})
export class AppComponent {
}

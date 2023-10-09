import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `
  <h2>This is header</h2>
  <p class="text-danger">{{message}}</p>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  message = "This is the header"
}

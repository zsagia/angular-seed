import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul class="menu">
  <li><a href="#!/view1">view1</a></li>
  <li><a href="#!/view2">view2</a></li>
  <li><a href="/bar">bar</a></li>
</ul>
    <router-outlet></router-outlet>
    <div ng-view></div>
  `,
})
export class AppComponent { }
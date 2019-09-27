import { Component } from '@angular/core';

import { version } from '../../package.json';
// need to add     "resolveJsonModule": true, in tsconfig.json
export const environment = {
    VERSION: version,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Celgene Locator ' + environment.VERSION;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LocatorMapModule } from './locator-map/locator-map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LocatorMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent
  ]
})
export class CoreModule { }

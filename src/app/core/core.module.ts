import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleStudyComponent } from './components/article-study/article-study.component';
import { ArticleStudyRightComponent } from './components/article-study-right/article-study-right.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MapComponent,
    ArticleStudyComponent,
    ArticleStudyRightComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MapComponent
  ]
})
export class CoreModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleStudyComponent } from './article-study.component';

describe('ArticleStudyComponent', () => {
  let component: ArticleStudyComponent;
  let fixture: ComponentFixture<ArticleStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleStudyRightComponent } from './article-study-right.component';

describe('ArticleStudyRightComponent', () => {
  let component: ArticleStudyRightComponent;
  let fixture: ComponentFixture<ArticleStudyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleStudyRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleStudyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

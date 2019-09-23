import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-study',
  templateUrl: './article-study.component.html',
  styleUrls: ['./article-study.component.scss']
})
export class ArticleStudyComponent implements OnInit {

  @Input() studyClickedList: [];

  constructor() { }

  ngOnInit() {
  }

}

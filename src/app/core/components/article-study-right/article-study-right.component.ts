import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-study-right',
  templateUrl: './article-study-right.component.html',
  styleUrls: ['./article-study-right.component.scss']
})
export class ArticleStudyRightComponent implements OnInit {

  @Input() studyClickedList: [];
  @Input() countryClicked: [];
  constructor() { }

  ngOnInit() {
  }

}

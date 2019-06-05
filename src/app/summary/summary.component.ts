import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  preface: any[]
  concept: any[]

  constructor(public summary: SummaryService) {
    this.preface = summary.getPreface()
    this.concept = summary.getConcept()
  }

  ngOnInit() {
  }

}

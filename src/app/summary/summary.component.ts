import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  list: any[]

  constructor(public summary: SummaryService) {
    this.list = summary.preface
  }

  ngOnInit() {
  }

}

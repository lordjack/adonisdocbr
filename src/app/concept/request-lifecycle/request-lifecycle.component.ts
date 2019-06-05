import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-lifecycle',
  templateUrl: './request-lifecycle.component.html',
  styleUrls: ['./request-lifecycle.component.scss']
})
export class RequestLifecycleComponent implements OnInit {

  code = `
  Route.get('/', ({ request, response, view }) => {
    // request
    // response
    // view
  })
  `

  code1 = `
  Route.get('/', (ctx) => {
    // ctx.request
    // ctx.response
    // ctx.view
    // etc
  })
  `


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cors',
  templateUrl: './cors.component.html',
  styleUrls: ['./cors.component.scss']
})
export class CorsComponent implements OnInit {

  code = `
  adonis install @adonisjs/cors
  `

  constructor() { }

  ngOnInit() {
  }

}

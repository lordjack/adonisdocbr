import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-introduction',
  templateUrl: './security-introduction.component.html',
  styleUrls: ['./security-introduction.component.scss']
})
export class SecurityIntroductionComponent implements OnInit {

  code = `
  Route.put('/users/:id', 'UserController.update')
  `

  code1 = `
  <form action="/users/1?_method=PUT" method="POST">
  </form>
  `

  code2 = `
  http: {
    allowMethodSpoofing: false
  }
  `

  code3 = `
  uploads: {
    maxSize: '2mb'
  }
  `

  file = {path: '${file.path}'}

  code4 = `
  const Helpers = use('Helpers')

  Route.get('download/:fileId', async ({ params, response }) => {
    const file = await Files.findorFail(params.fileId)
    response.download(Helpers.tmpPath('uploads/${this.file.path}'))
  })
  `

  constructor() { }

  ngOnInit() {
  }

}

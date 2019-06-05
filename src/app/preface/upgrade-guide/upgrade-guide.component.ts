import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade-guide',
  templateUrl: './upgrade-guide.component.html',
  styleUrls: ['./upgrade-guide.component.scss']
})
export class UpgradeGuideComponent implements OnInit {

  code = `npm install -g npm-check`
  code1 = `npm-check -u`
  code2 = `
  const BaseExceptionHandler = use('BaseExceptionHandler')

  class ExceptionHandler extends BaseExceptionHandler {
  }
  `
  code3 = `
  class ExceptionHandler extends BaseExceptionHandler {
    async handle (error, { response }) {
      if (error.name === 'UserNotFoundException') {
        // handle it yourself
        return
      }
  
      super.handle(...arguments)
    }
  }
  `

  code4 = `
  Route.url('posts/:id', { id: 1 }, 'blog.adonisjs.com')
  `
  code5 = `
  Route.url('posts/:id', { id: 1 }, { domain: 'blog.adonisjs.com' })
  `
  code6 = `
  const { validate } = use('Validator')
  validate(data, rules, messages, 'jsonapi')
  `
  code7 = `
  const { validate, formatters } = use('Validator')
  validate(data, rules, messages, formatters.JsonApi)
  `
  code8 = `
  class StoreUser {
    get formatter () {
      return 'jsonapi'
    }
  }
  `
  code9 = `
  const { formatters } = use('Validator')

  class StoreUser {
    get formatter () {
      return formatters.JsonApi
    }
  }
  `
  code10 = `
  const { formatters, configure } = use('Validator')
  
  configure({
    FORMATTER: formatters.JsonApi
  })
  `
  code11 = `
  {{ css('style') }}
  `
  code12 = `
  {{ style('style') }}
  `
  code13 = `
  const user = await User.find(1)
  user.created_at instanceof moment // true
  `
  code14 = `
  const user = await User.find(1)
  user.created_at instanceof moment // false
  `
  code15 = `
  class User extends Model {
    static castDates (field, value) {
      if (field === 'dob') {
        return ´$ {value.fromNow(true)} old´
      }
      return super.formatDates(field, value)
    }
  }
  `

  constructor() { }

  ngOnInit() {
  }

}

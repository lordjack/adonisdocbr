import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ioc-container',
  templateUrl: './ioc-container.component.html',
  styleUrls: ['./ioc-container.component.scss']
})
export class IocContainerComponent implements OnInit {

  code = `
  const knex = require('knex')

  const connection = knex({
    client: 'mysql',
    connection: {}
  })

  module.exports = connection
  `

  code1 = `
  class Session {
    constructor (redis) {
      // needs Redis instance
    }
  }
  
  class Redis {
    constructor (config) {
      // needs Config instance
    }
  }
  
  class Config {
    constructor (configDirectory) {
      // needs config directory path
    }
  }
  `

  code2 = `
  const config = new Config(configDirectory)
  const redis = new Redis(config)
  const session = new Session(redis)
  `

  code3 = `
  class Redis {
    constructor (Config) {
      const redisConfig = Config.get('redis')
      // connect to redis server
    }
  }
  
  module.exports = Redis
  `

  code4 = `
  const { ioc } = require('@adonisjs/fold')
  const Redis = require('./Redis')

  ioc.bind('My/Redis', function (app) {
    const Config = app.use('Adonis/Src/Config')
    return new Redis(Config)
  })
  `

  code5 = `
  const redis = ioc.use('My/Redis')
  `

  code6 = `
  ioc.singleton('My/Redis', function (app) {
    const Config = app.use('Adonis/Src/Config')
    return new Redis(Config)
  })
  `

  code7 = `
  const redis = ioc.use('My/Redis')
  `

  code8 = `
  const redis = use('My/Redis')
  `

  code9 = `
  aliases: {
    MyRoute: 'Adonis/Src/Route'
  }
  `

  code10 = `
  const Route = use('MyRoute')
  `

  code11 = `
  class FooService {
  }
  
  module.exports = FooService
  `
  code12 = `
  const Foo = use('App/Services/Foo')
  `
  constructor() { }

  ngOnInit() {
  }

}

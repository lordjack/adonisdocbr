import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  code = `
  adonis install @adonisjs/auth
  `
  code1 = `
  const providers = [
    '@adonisjs/auth/providers/AuthProvider'
  ]
  `
  code2 = `
  const globalMiddleware = [
    'Adonis/Middleware/AuthInit'
  ]
  
  const namedMiddleware = {
    auth: 'Adonis/Middleware/Auth',
    guest: 'Adonis/Middleware/AllowGuestOnly'
  }
  `
  code3 = `
  Route
    .post('login', 'UserController.login')
    .middleware('guest')

  Route
    .get('users/:id', 'UserController.show')
    .middleware('auth')
  `
  code4 = `
  adonis make:controller User
  `
  code5 = `
  class UserController {

    async login ({ auth, request }) {
      const { email, password } = request.all()
      await auth.attempt(email, password)
  
      return 'Logged in successfully'
    }
  }
  `
  code6 = `
  class UserController {
    async login () {
      ...
    }
  
    show ({ auth, params }) {
      if (auth.user.id !== Number(params.id)) {
        return "You cannot see someone else's profile"
      }
      return auth.user
    }
  }
  `
  code7 = `
  module.exports = {
    authenticator: 'session',
    session: {
      serializer: 'Lucid',
      scheme: 'session',
      model: 'App/Models/User',
      uid: 'email',
      password: 'password'
    }
  }
  `
  code8 = `
  await auth.attempt(uid, password)
  `
  code9 = `
  const user = await User.find(1)

  await auth.login(user)
  `
  code10 = `
  await auth.loginViaId(1)
  `
  code11 = `
  await auth
    .remember(true)
    .attempt(email, password)
  `
  code12 = `
  try {
    await auth.check()
  } catch (error) {
    response.send('You are not logged in')
  }
  `
  code13 = `
  try {
    return await auth.getUser()
  } catch (error) {
    response.send('You are not logged in')
  }
  `
  code14 = `
  await auth.logout()
  `
  code15 = `
  try {
    await auth.check()
  } catch (error) {
    response.send(error.message)
  }
  `
  code16 = `
  try {
    return await auth.getUser()
  } catch (error) {
    response.send('Credentials missing')
  }
  `

  constructor() { }

  ngOnInit() {
  }

}

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
  code17 = `
  module.exports = {
    authenticator: 'jwt',
    jwt: {
      serializer: 'Lucid',
      model: 'App/Model/User',
      scheme: 'jwt',
      uid: 'email',
      password: 'password',
      options: {
        secret: Config.get('app.appKey'),
        // For additional options, see the table below...
      }
    }
  }
  `
  code18 = `
  await auth.attempt(uid, password)
  `
  code19 = `
  {
    type: 'type',
    token: '.....',
    refreshToken: '....'
  }
  `
  code20 = `
  const user = await User.find(1)

  await auth.generate(user)
  `
  code21 = `
  await auth
    .withRefreshToken()
    .attempt(uid, password)
  `
  code22 = `
  const refreshToken = request.input('refresh_token')

  await auth.generateForRefreshToken(refreshToken, true)
  `
  code23 = `
  await auth
    .newRefreshToken()
    .generateForRefreshToken(refreshToken)
  `
  code24 = `
  try {
    await auth.check()
  } catch (error) {
    response.send('Missing or invalid jwt token')
  }
  `
  code25 = `
  try {
    return await auth.getUser()
  } catch (error) {
    response.send('Missing or invalid jwt token')
  }
  `
  code26 = `
  await auth.listTokens()
  `
  code27 = `
  const token = await auth.attempt(uid, password)
  `
  code28 = `
  {
    type: 'bearer',
    token: '...'
  }
  `
  code29 = `
  const user = await User.find(1)

  const token = await auth.generate(user)
  `
  code30 = `
  try {
    await auth.check()
  } catch (error) {
    response.send('Missing or invalid api token')
  }
  `
  code31 = `
  try {
    await auth.getUser()
  } catch (error) {
    response.send('Missing or invalid api token')
  }
  `
  code32 = `
  await auth.listTokens()
  `
  code33 = `
  const user = auth.user

  const auth
    .authenticator('jwt')
    .generate(user)
  `
  code34 = `
  const namedMiddleware = {
    auth: 'Adonis/Middleware/Auth'
  }
  `
  code35 = `
  Route
    .get('users/profile', 'UserController.profile')
    .middleware(['auth'])
  `
  code36 = `
  const namedMiddleware = {
    guest: 'Adonis/Middleware/AllowGuestOnly'
  }
  `
  code37 = `
  // Não queremos que nosso usuário conectado acesse essa visualização
  Route
    .get('login', 'AuthController.login')
    .middleware(['guest'])
  `
  code38 = `
  Hello {{ auth.user.username }}!
  `
  code39 = `
  @loggedIn
    <h2> Hello {{ auth.user.username }} </h2>
  @else
    <p> Please login </p>
  @endloggedIn
  `
  code40 = `
  const refreshToken = '' // obtêm do usuário

  await auth
    .authenticator('jwt')
    .revokeTokens([refreshToken])
  `
  code41 = `
  const refreshToken = '' // obtêm do usuário

  await auth
    .authenticator('jwt')
    .revokeTokens([refreshToken], true)
  `
  code42 = `
  await auth
    .authenticator('jwt')
    .revokeTokens()
  `
  code43 = `
  // para usuário atualmente conectado

  const apiToken = auth.getAuthHeader()

  await auth
    .authenticator('api')
    .revokeTokens([apiToken])
  `
  code44 = `
  const user = await User.find(1)

  await auth
    .authenticator('jwt')
    .revokeTokensForUser(user)
  `

  constructor() { }

  ngOnInit() {
  }

}

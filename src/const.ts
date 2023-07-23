export enum AppRoute {
  Intro = '/',
  Login = '/sign-in',
  Registration = '/sign-up',
  Error404 = '*',
}

export enum APIRoute {
  Login = '/login',
  Registration = '/register'
}

export enum NameSpace {
  User = 'User',
}

export enum Role {
  User = 'пользователь',
  Coach = 'тренер',
  Unknown = 'unknown'
}

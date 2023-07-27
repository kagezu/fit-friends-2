export enum AppRoute {
  Intro = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Index = '/index',
  QuestionnaireCoach = '/questionnaire-coach',
  QuestionnaireUser = '/questionnaire-user',
  PersonalAccountCoach = '/personal-account-coach',


  Error404 = '*',
}

export enum APIRoute {
  AuthCheck = 'user',
  SignIn = 'auth/login',
  SignUp = 'auth/register',
}

export enum NameSpace {
  User = 'User',
  Error = 'Error',
}

export enum Role {
  User = 'пользователь',
  Coach = 'тренер',
  Unknown = 'unknown'
}

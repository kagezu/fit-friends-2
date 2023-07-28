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
  UpdateUser = 'user/update',
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

export enum TrainingLevel {
  Beginner = 'новичок',
  Amateur = 'любитель',
  Professional = 'профессионал'
}

export enum Intervals {
  First = '10-30 мин',
  Second = '30-50 мин',
  Third = '50-80 мин',
  Fourth = '80-100 мин'
}

export enum TrainingType {
  Yoga = 'йога',
  Running = 'бег',
  Boxing = 'бокс',
  Stretching = 'стрейчинг',
  Crossfit = 'кроссфит',
  Aerobics = 'аэробика',
  Pilates = 'пилатес',
  Strength = 'силовые'
}

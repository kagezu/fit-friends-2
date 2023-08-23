export const MAX_TRAINING_TYPE = 3;
export const STATIC_PATH = 'http://localhost:3333/static/';
export const ESCAPE_KEY = 'Escape';

export enum AppRoute {
  Intro = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Index = '/index',
  QuestionnaireCoach = '/questionnaire-coach',
  QuestionnaireUser = '/questionnaire-user',
  PersonalAccountCoach = '/personal-account-coach',
  PersonalAccountUser = '/personal-account-user',
  FriendsListCoach = '/friends-list-coach',
  FriendsListUser = '/friends-list-user',
  MyOrders = '/my-orders',
  MyTrainings = '/my-trainings',
  MyPurchases = '/my-purchases',
  CreateTraining = '/create-training',
  TrainingCardUser = '/training-card-user',
  TrainingCardCoach = '/training-card-coach',
  TrainingCatalog = '/training-catalog',
  UsersCatalog = '/users-catalog',
  UserCardDetail = '/user-card',

  Error401 = '/error-401',
  Error404 = '/*',
}

export enum APIRoute {
  AuthCheck = 'user',
  SignIn = 'auth/login',
  SignUp = 'auth/register',
  UpdateUser = 'user/update',
  UserIndex = 'user/index',
  UserInfo = 'user/info',
  Notify = '/notify',
  Training = '/training/index',
  TrainingCreate = '/training',
  TrainingDetail = '/training/detail',
  MyTraining = '/training/my',
  Review = '/review',
  Balance = '/balance/info',
  TrainingBuy = '/balance/index',
  BalanceDecrease = '/balance/dec',
  Order = '/order',
  PersonalOrder = '/personal-order/user',
  PersonalOrders = '/personal-order/index',
  Friend = '/friend',
  FriendIndex = '/friend/index',
  Subscribe = 'subscribe',
}

export enum NameSpace {
  User = 'User',
  UserInfo = 'UserInfo',
  Users = 'Users',
  Error = 'Error',
  Notify = 'Notify',
  TrainingSpecial = 'TrainingSpecial',
  Trainings = 'Trainings',
  TrainingOffers = 'TrainingOffers',
  TrainingFiltred = 'TrainingFiltred',
  Training = 'Training',
  Reviews = 'Reviews',
  Balance = 'Balance',
  Friends = 'Friends',
  Friend = 'Friend',
  PersonalOrder = 'PersonalOrder',
  PersonalOrders = 'PersonalOrders',
}

export enum Role {
  User = 'пользователь',
  Coach = 'тренер',
  Unknown = 'unknown'
}

export enum Gender {
  Male = 'мужской',
  Female = 'женский',
  Unknown = 'неважно'
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

export enum PaymentMethod {
  Visa = 'visa',
  Mir = 'mir',
  Umoney = 'umoney'
}

export enum CaloriesToBurnLimit {
  Max = 5000,
  Min = 1000
}

export enum CaloriesPerDayLimit {
  Max = 5000,
  Min = 1000
}

export enum ResumeLimit {
  Max = 140,
  Min = 10
}

export enum Sort {
  Desc = 'desc',
  Asc = 'asc',
  Free = 'free'
}

export enum HTTPCode {
  OK = 200,
  CONFLICT = 409,
  NOT_FOUND = 404
}

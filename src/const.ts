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
  MyPurchases = 'my-purchases',
  CreateTraining = '/create-training',
  TrainingCardUser = '/training-card-user',
  TrainingCardCoach = '/training-card-coach',
  TrainingCatalog = '/training-catalog',
  UsersCatalog = '/users-catalog',
  UserCardUser = '/user-card-user',
  UserCardCoach = '/user-card-coach',

  Error404 = '/*',
}

export enum APIRoute {
  AuthCheck = 'user',
  SignIn = 'auth/login',
  SignUp = 'auth/register',
  UpdateUser = 'user/update',
  UserIndex = 'user/index',
  Notify = '/notify',
  Training = '/training/index',
  TrainingDetail = '/training/detail',
  MyTraining = '/training/my',
  Review = '/review',
  Balance = '/balance/info',
  BalanceDecrease = '/balance/dec',
  Order = '/order',
}

export enum NameSpace {
  User = 'User',
  UsersForCompany = 'UsersForCompany',
  Error = 'Error',
  Notify = 'Notify',
  TrainingSpecial = 'TrainingSpecial',
  TrainingPopular = 'TrainingPopular',
  TrainingOffers = 'TrainingOffers',
  TrainingFiltred = 'TrainingFiltred',
  Training = 'Training',
  Reviews = 'Reviews',
  Balance = 'Balance',
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
  Max = 10,
  Min = 140
}

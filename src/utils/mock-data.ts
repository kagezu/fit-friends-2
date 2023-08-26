import { name, datatype, internet, random, date } from 'faker';
import { Gender, Intervals, NameSpace, PaymentMethod, Role, TrainingLevel, TrainingType } from '../const';
import { User } from '../types/user';
import { locations } from '../types/arrays';
import { Training } from '../types/training';
import { Notify } from '../types/notify';
import { PersonalOrder } from '../types/personal-order';
import { OrderStatus } from '../types/order-tatus';
import { Review } from '../types/review';
import { Friend } from '../types/friend';
import { OrderData } from '../types/order-data';
import { ReviewData } from '../types/review-data';
import { UserData } from '../types/user-data';
import { mockStore } from './mock-api';

const NUMBER_COUNT = 1000;
const STRING_LENGTH = 30;
const BACKGROUND_PATH = 'training-01.jpg';
const EVALUATION = 5;
const COUNT = 5;
const MOCK_ID = 'id';

export const emptyAction = { type: '' };

export const fakerUser: User = {
  role: Role.User,
  id: datatype.uuid(),
  name: name.lastName(),
  email: internet.email(),
  avatar: '',
  gender: Gender.Male,
  birthday: date.past().toString(),
  description: datatype.string(STRING_LENGTH),
  location: random.arrayElement(locations),
  background: BACKGROUND_PATH,
  createdAt: date.past().toString(),
  trainingLevel: TrainingLevel.Beginner,
  trainingTypes: [TrainingType.Running],
  interval: Intervals.Fourth,
  caloriesToBurn: NUMBER_COUNT,
  caloriesPerDay: NUMBER_COUNT,
  readyForTraining: true,
};

export const fakerCoach: User = {
  role: Role.Coach,
  id: datatype.uuid(),
  name: name.lastName(),
  email: internet.email(),
  avatar: '',
  gender: random.arrayElement(Object.assign(Gender) as string[]),
  birthday: date.past().toString(),
  description: datatype.string(STRING_LENGTH),
  location: random.arrayElement(locations),
  background: BACKGROUND_PATH,
  createdAt: date.past().toString(),
  trainingLevel: TrainingLevel.Professional,
  trainingTypes: [TrainingType.Running],
  resume: datatype.string(STRING_LENGTH),
  readyForIndividualTraining: true,
};

export const fakerTraining: Training = {
  id: datatype.uuid(),
  coachId: datatype.uuid(),
  demoVideo: '',
  rating: 0,
  title: name.title(),
  trainingLevel: TrainingLevel.Professional,
  trainingType: TrainingType.Running,
  interval: Intervals.Fourth,
  price: NUMBER_COUNT,
  caloriesToBurn: NUMBER_COUNT,
  description: datatype.string(STRING_LENGTH),
  usersGender: Gender.Unknown,
  specialOffer: false,
  background: BACKGROUND_PATH,
  totalAmount: NUMBER_COUNT,
  totalSale: COUNT
};

export const fakerBalance = {
  training: fakerTraining,
  count: COUNT
};

export const fakerNotifies: Notify[] = [
  {
    id: datatype.uuid(),
    createdAt: date.past().toString(),
    message: 'message 1'
  },
  {
    id: datatype.uuid(),
    createdAt: date.past().toString(),
    message: 'message 2'
  },
  {
    id: datatype.uuid(),
    createdAt: date.past().toString(),
    message: 'message 3'
  }
];

export const fakerPersonalOrder: PersonalOrder = {
  id: datatype.uuid(),
  initiator: datatype.uuid(),
  user: datatype.uuid(),
  createdAt: '',
  updatedAt: '',
  orderStatus: OrderStatus.Pending
};

export const fakerReview: Review = {
  id: datatype.uuid(),
  name: name.lastName(),
  avatar: '',
  training: datatype.uuid(),
  evaluation: EVALUATION,
  textReview: datatype.string(STRING_LENGTH)
};

export const fakerFriend: Friend = {
  friend: fakerUser
};

export const orderData: OrderData = {
  training: MOCK_ID,
  count: COUNT,
  paymentMethod: PaymentMethod.Mir
};

export const reviewData: ReviewData = {
  training: datatype.uuid(),
  evaluation: EVALUATION,
  textReview: datatype.string(STRING_LENGTH)
};

export const fakeUserData: UserData = {
  user: fakerUser,
  accessToken: datatype.string(STRING_LENGTH),
  refreshToken: datatype.string(STRING_LENGTH)
};

export const fakerStore = mockStore({
  [NameSpace.User]: fakerUser,
  [NameSpace.UserInfo]: fakerCoach,
  [NameSpace.Users]: [fakerUser],
  [NameSpace.Error]: {},
  [NameSpace.Friends]: [fakerFriend],
  [NameSpace.PersonalOrders]: [fakerPersonalOrder],
  [NameSpace.PersonalOrder]: fakerPersonalOrder,
  [NameSpace.TrainingFiltred]: [fakerTraining],
  [NameSpace.Trainings]: [fakerTraining],
  [NameSpace.TrainingSpecial]: [fakerTraining],
  [NameSpace.TrainingOffers]: [fakerTraining],
  [NameSpace.Training]: fakerTraining,
  [NameSpace.Balance]: fakerBalance,
  [NameSpace.Reviews]: [fakerReview],
  [NameSpace.Notify]: fakerNotifies,
});

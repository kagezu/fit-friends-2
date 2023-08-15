import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userInfoSlice, userProcess, usersSlice } from './user/user-slice';
import { errorProcess } from './error/error-process';
import { notifyProcess } from './notify/notify-process';
import { trainingSpecialSlice, trainingOffersSlice, trainingFiltredSlice, trainingSlice, trainingsSlice } from './training/training-slice';
import { reviewsSlice } from './review/review-slice';
import { balanceSlice } from './balance/balance-slice';
import { friendsSlice } from './friend/friend-slice';
import { personalOrderSlice, personalOrdersSlice } from './order/order-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Users]: usersSlice.reducer,
  [NameSpace.UserInfo]: userInfoSlice.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Notify]: notifyProcess.reducer,
  [NameSpace.TrainingSpecial]: trainingSpecialSlice.reducer,
  [NameSpace.Trainings]: trainingsSlice.reducer,
  [NameSpace.TrainingOffers]: trainingOffersSlice.reducer,
  [NameSpace.TrainingFiltred]: trainingFiltredSlice.reducer,
  [NameSpace.Training]: trainingSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Balance]: balanceSlice.reducer,
  [NameSpace.Friends]: friendsSlice.reducer,
  [NameSpace.PersonalOrder]: personalOrderSlice.reducer,
  [NameSpace.PersonalOrders]: personalOrdersSlice.reducer,
});

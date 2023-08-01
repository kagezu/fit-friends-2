import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../types/enums';
import { userProcess } from './user/user-process';
import { errorProcess } from './error/error-process';
import { notifyProcess } from './notify/notify-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
  [NameSpace.Notify]: notifyProcess.reducer,
});

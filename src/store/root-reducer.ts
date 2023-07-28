import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});

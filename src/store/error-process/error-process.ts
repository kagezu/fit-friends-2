import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorList } from '../utils/parse-error';

export const userInitialState = {};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState: userInitialState,
  reducers: {
    responseError:
      (state, action: PayloadAction<ErrorList>) => {
        Object.assign(state, action.payload);

      }
  }
});

export const { responseError } = errorProcess.actions;

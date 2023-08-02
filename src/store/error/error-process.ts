import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../types/enums';
import { ErrorList } from '../../utils/parse-error';

export const userInitialState = {};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState: userInitialState,
  reducers: {
    responseError:
      (state, action: PayloadAction<ErrorList>) => action.payload
  }
});

export const { responseError } = errorProcess.actions;

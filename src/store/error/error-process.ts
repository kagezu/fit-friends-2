import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorList } from '../../utils/parse-error';

export const errorInitialState = {};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState: errorInitialState,
  reducers: {
    responseError:
      (state, action: PayloadAction<ErrorList>) => action.payload
  }
});

export const { responseError } = errorProcess.actions;

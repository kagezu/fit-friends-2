import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Role } from '../../const';
import { User } from '../../types/user';

export const userInitialState: User = {
  role: Role.Unknown,
  id: '',
  name: '',
  email: '',
  gender: '',
  location: ''
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState: userInitialState,
  reducers: {
    requireAuthorization:
      (state, action: PayloadAction<User>) => action.payload
  },
});


export const usersForCompanySlice = createSlice({
  name: NameSpace.UsersForCompany,
  initialState: [] as User[],
  reducers: {
    usersForCompany:
      (state, action: PayloadAction<User[]>) => action.payload
  },
});

export const { requireAuthorization } = userProcess.actions;
export const { usersForCompany } = usersForCompanySlice.actions;

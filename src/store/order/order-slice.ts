import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PersonalOrder } from '../../types/personal-order';

export const initialPersonalOrder: PersonalOrder = {
  id: '',
  initiator: '',
  user: '',
  createdAt: '',
  updatedAt: '',
  orderStatus: '',
};

export const personalOrderSlice = createSlice({
  name: NameSpace.PersonalOrder,
  initialState: initialPersonalOrder,
  reducers: {
    personalOrderAction:
      (state, action: PayloadAction<PersonalOrder>) => action.payload
  }
});

export const personalOrdersSlice = createSlice({
  name: NameSpace.PersonalOrder,
  initialState: [] as PersonalOrder[],
  reducers: {
    personalOrdersAction:
      (state, action: PayloadAction<PersonalOrder[]>) => action.payload
  }
});

export const { personalOrderAction } = personalOrderSlice.actions;
export const { personalOrdersAction } = personalOrdersSlice.actions;

import { fakerCoach, emptyAction, fakerUser } from '../../utils/mock-data';
import { User } from '../../types/user';
import { userProcess, userInitialState, usersSlice, userInfoSlice, userInfoFriendAction, userInfoAction, userSubscribedAction, usersAction, requireAuthorization } from './user-slice';

describe('userProcess', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(userInitialState);
  });

  it('Должен вернуть объект пользователя', () => {
    const state = userInitialState;
    const result = userProcess.reducer(state, requireAuthorization(fakerUser));
    expect(result).toEqual(fakerUser);
  });
});

describe('usersSlice', () => {
  it('Должен вернуть по умолчанию пустой массив', () => {
    const result = usersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual([]);
  });

  it('Должен вернуть массив пользователей', () => {
    const state = [] as User[];
    const result = usersSlice.reducer(state, usersAction([fakerUser, fakerCoach]));
    expect(result).toEqual([fakerUser, fakerCoach]);
  });
});

describe('userInfoSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = userInfoSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(userInitialState);
  });

  it('Должен вернуть объект пользователя', () => {
    const state = userInitialState;
    const result = userInfoSlice.reducer(state, userInfoAction(fakerUser));
    expect(result).toEqual(fakerUser);
  });

  it('Должен вернуть объект пользователя c флагом друзья', () => {
    const state = fakerUser;
    const result = userInfoSlice.reducer(state, userInfoFriendAction(true));
    expect(result).toEqual({ ...fakerUser, friend: true });
  });

  it('Должен вернуть объект пользователя c флагом подписка', () => {
    const state = fakerUser;
    const result = userInfoSlice.reducer(state, userSubscribedAction(true));
    expect(result).toEqual({ ...fakerUser, subscribed: true });
  });
});

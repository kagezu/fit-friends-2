import { APIRoute, AppRoute, HTTPCode } from '../../const';
import { KeyName } from '../../services/token';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakeUserData, fakerUser } from '../../utils/mock-data';
import { responseError } from '../error/error-process';
import { getNotifyIndexAction } from '../notify/notify-api-actions';
import { checkAuthAction, deleteSubscribeAction, getSubscribedAction, getUsersAction, loginAction, newSubscribeAction, questionnaireAction, registerAction, userInfoEditAction } from './user-api-actions';
import { requireAuthorization, userSubscribedAction, usersAction } from './user-slice';

const MOCK_ID = 'id';
const loginData = { email: 'test@test.ru', password: '123456' };

describe('user-api', () => {
  const store: mockStoreType = mockStore();
  beforeEach(() => {
    store.clearActions();
  });

  it('checkAuthAction', async () => {
    mockApi
      .onGet(APIRoute.AuthCheck)
      .reply(HTTPCode.OK, fakerUser);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(checkAuthAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [checkAuthAction.pending.type, undefined],
      [requireAuthorization.type, fakerUser],
      [checkAuthAction.fulfilled.type, undefined]
    ]);
  });

  it('getUsersAction', async () => {
    mockApi
      .onGet(APIRoute.UserIndex)
      .reply(HTTPCode.OK, [fakerUser]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getUsersAction({}));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getUsersAction.pending.type, undefined],
      [usersAction.type, [fakerUser]],
      [getUsersAction.fulfilled.type, undefined]
    ]);
  });

  it('loginAction', async () => {
    mockApi
      .onPost(APIRoute.SignIn)
      .reply(HTTPCode.OK, fakeUserData);
    expect([])
      .toEqual(store.getActions());
    Storage.prototype.setItem = jest.fn();
    await store.dispatch(loginAction({ ...loginData, navigate: () => undefined }));
    const actions = extractActions(store.getActions());

    expect(actions).toEqual([
      [loginAction.pending.type, undefined],
      [requireAuthorization.type, fakerUser],
      [responseError.type, {}],
      [getNotifyIndexAction.pending.type, undefined],
      [loginAction.fulfilled.type, undefined]
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith(KeyName.Token, fakeUserData.accessToken);
    expect(Storage.prototype.setItem).toBeCalledWith(KeyName.RefreshToken, fakeUserData.refreshToken);
  });

  it('registerAction', async () => {
    mockApi
      .onPost(APIRoute.SignUp)
      .reply(HTTPCode.OK, fakeUserData);
    expect([])
      .toEqual(store.getActions());
    Storage.prototype.setItem = jest.fn();
    await store.dispatch(registerAction({ request: {}, navigate: () => undefined }));
    const actions = extractActions(store.getActions());

    expect(actions).toEqual([
      [registerAction.pending.type, undefined],
      [requireAuthorization.type, fakerUser],
      [responseError.type, {}],
      [registerAction.fulfilled.type, undefined]
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith(KeyName.Token, fakeUserData.accessToken);
    expect(Storage.prototype.setItem).toBeCalledWith(KeyName.RefreshToken, fakeUserData.refreshToken);
  });

  it('questionnaireAction', async () => {
    mockApi
      .onPatch(APIRoute.UpdateUser)
      .reply(HTTPCode.OK, fakerUser);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(questionnaireAction({ request: {}, target: AppRoute.Index, navigate: () => undefined }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [questionnaireAction.pending.type, undefined],
      [requireAuthorization.type, fakerUser],
      [responseError.type, {}],
      [questionnaireAction.fulfilled.type, undefined]
    ]);
  });

  it('userInfoEditAction', async () => {
    mockApi
      .onPatch(APIRoute.UpdateUser)
      .reply(HTTPCode.OK, fakerUser);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(userInfoEditAction({}));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [userInfoEditAction.pending.type, undefined],
      [requireAuthorization.type, fakerUser],
      [responseError.type, {}],
      [userInfoEditAction.fulfilled.type, undefined]
    ]);
  });

  it('getSubscribedAction', async () => {
    mockApi
      .onGet(`${APIRoute.Subscribe}/${MOCK_ID}`)
      .reply(HTTPCode.OK, { coach: MOCK_ID });
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getSubscribedAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getSubscribedAction.pending.type, undefined],
      [userSubscribedAction.type, true],
      [getSubscribedAction.fulfilled.type, undefined]
    ]);
  });

  it('newSubscribeAction', async () => {
    mockApi
      .onPost(`${APIRoute.Subscribe}/${MOCK_ID}`)
      .reply(HTTPCode.OK, { coach: MOCK_ID });
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(newSubscribeAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [newSubscribeAction.pending.type, undefined],
      [userSubscribedAction.type, true],
      [newSubscribeAction.fulfilled.type, undefined]
    ]);
  });

  it('deleteSubscribeAction', async () => {
    mockApi
      .onDelete(`${APIRoute.Subscribe}/${MOCK_ID}`)
      .reply(HTTPCode.OK, { coach: MOCK_ID });
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(deleteSubscribeAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [deleteSubscribeAction.pending.type, undefined],
      [userSubscribedAction.type, true],
      [deleteSubscribeAction.fulfilled.type, undefined]
    ]);
  });

});

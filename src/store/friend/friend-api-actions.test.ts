import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerFriend } from '../../utils/mock-data';
import { responseError } from '../error/error-process';
import { userInfoFriendAction } from '../user/user-slice';
import { getFriendsAction, getFriendAction, addFriendAction, deleteFriendAction } from './friend-api-actions';
import { friendsAction } from './friend-slice';

const MOCK_ID = 'id';

describe('friend-api', () => {
  const store: mockStoreType = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('getFriendsAction', async () => {
    mockApi
      .onGet(APIRoute.FriendIndex)
      .reply(HTTPCode.OK, [fakerFriend]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getFriendsAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getFriendsAction.pending.type, undefined],
      [friendsAction.type, [fakerFriend]],
      [getFriendsAction.fulfilled.type, undefined]
    ]);
  });

  it('getFriendsAction failed', async () => {
    mockApi
      .onGet(APIRoute.FriendIndex)
      .reply(HTTPCode.NOT_FOUND, [fakerFriend]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getFriendsAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getFriendsAction.pending.type, undefined],
      [friendsAction.type, []],
      [getFriendsAction.fulfilled.type, undefined]
    ]);
  });

  it('getFriendAction', async () => {
    mockApi
      .onGet(`${APIRoute.Friend}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerFriend);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getFriendAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getFriendAction.pending.type, undefined],
      [userInfoFriendAction.type, true],
      [responseError.type, {}],
      [getFriendAction.fulfilled.type, undefined]
    ]);
  });

  it('addFriendAction', async () => {
    mockApi
      .onPost(`${APIRoute.Friend}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerFriend);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(addFriendAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [addFriendAction.pending.type, undefined],
      [userInfoFriendAction.type, true],
      [responseError.type, {}],
      [addFriendAction.fulfilled.type, undefined]
    ]);
  });

  it('deleteFriendAction', async () => {
    mockApi
      .onDelete(`${APIRoute.Friend}/${MOCK_ID}`)
      .reply(HTTPCode.OK);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(deleteFriendAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [deleteFriendAction.pending.type, undefined],
      [userInfoFriendAction.type, false],
      [responseError.type, {}],
      [deleteFriendAction.fulfilled.type, undefined]
    ]);
  });

});

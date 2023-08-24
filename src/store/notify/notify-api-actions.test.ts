import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerNotifies } from '../../utils/mock-data';
import { getNotifyIndexAction, deleteNotifyAction } from './notify-api-actions';
import { notifyDelete, notifyUpdate } from './notify-process';

const MOCK_ID = 'id';
const MOCK_INDEX = 1;

describe('notify-api', () => {
  const store: mockStoreType = mockStore();
  beforeEach(() => {
    store.clearActions();
  });

  it('getNotifyIndexAction', async () => {
    mockApi
      .onGet(APIRoute.Notify)
      .reply(HTTPCode.OK, fakerNotifies);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getNotifyIndexAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getNotifyIndexAction.pending.type, undefined],
      [notifyUpdate.type, fakerNotifies],
      [getNotifyIndexAction.fulfilled.type, undefined]
    ]);
  });

  it('deleteNotifyAction', async () => {
    mockApi
      .onDelete(`${APIRoute.Notify}/${MOCK_ID}`)
      .reply(HTTPCode.OK);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(deleteNotifyAction({ id: MOCK_ID, index: MOCK_INDEX }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [deleteNotifyAction.pending.type, undefined],
      [notifyDelete.type, MOCK_INDEX],
      [deleteNotifyAction.fulfilled.type, undefined]
    ]);
  });

});

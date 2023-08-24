import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerBalance } from '../../utils/mock-data';
import { decreaseBalanceAction, getBalanceAction } from './balance-api-actions';
import { balanceAction } from './balance-slice';

const MOCK_ID = 'id';

describe('balance-api', () => {
  const store: mockStoreType = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('getBalanceAction', async () => {
    mockApi
      .onGet(`${APIRoute.Balance}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerBalance);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getBalanceAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getBalanceAction.pending.type, undefined],
      [balanceAction.type, fakerBalance],
      [getBalanceAction.fulfilled.type, undefined]
    ]);
  });

  it('decreaseBalanceAction', async () => {
    mockApi
      .onPatch(APIRoute.BalanceDecrease)
      .reply(HTTPCode.OK, fakerBalance);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(decreaseBalanceAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [decreaseBalanceAction.pending.type, undefined],
      [balanceAction.type, fakerBalance],
      [decreaseBalanceAction.fulfilled.type, undefined],
    ]);
  });
});

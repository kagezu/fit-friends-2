import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerBalance, fakerPersonalOrder, orderData } from '../../utils/mock-data';
import { balanceAction } from '../balance/balance-slice';
import { responseError } from '../error/error-process';
import { acceptPersonalOrderAction, createNewOrderAction, createPersonalOrderAction, getPersonalOrderAction, getPersonalOrdersAction, rejectPersonalOrderAction } from './order-api-actions';
import { personalOrderAction, personalOrdersAction } from './order-slice';

const MOCK_ID = 'id';

describe('order-api', () => {
  const store: mockStoreType = mockStore();
  beforeEach(() => {
    store.clearActions();
  });

  it('createNewOrderAction', async () => {
    mockApi
      .onPost(APIRoute.Order)
      .reply(HTTPCode.OK, fakerBalance);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(createNewOrderAction(orderData));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [createNewOrderAction.pending.type, undefined],
      [balanceAction.type, fakerBalance],
      [responseError.type, {}],
      [createNewOrderAction.fulfilled.type, undefined]
    ]);
  });

  it('getPersonalOrderAction', async () => {
    mockApi
      .onGet(`${APIRoute.PersonalOrder}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerPersonalOrder);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getPersonalOrderAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getPersonalOrderAction.pending.type, undefined],
      [personalOrderAction.type, fakerPersonalOrder],
      [getPersonalOrderAction.fulfilled.type, undefined]
    ]);
  });

  it('getPersonalOrdersAction', async () => {
    mockApi
      .onGet(APIRoute.PersonalOrders)
      .reply(HTTPCode.OK, [fakerPersonalOrder]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getPersonalOrdersAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getPersonalOrdersAction.pending.type, undefined],
      [personalOrdersAction.type, [fakerPersonalOrder]],
      [getPersonalOrdersAction.fulfilled.type, undefined]
    ]);
  });

  it('createPersonalOrderAction', async () => {
    mockApi
      .onPost(`${APIRoute.PersonalOrder}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerPersonalOrder);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(createPersonalOrderAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [createPersonalOrderAction.pending.type, undefined],
      [personalOrderAction.type, fakerPersonalOrder],
      [createPersonalOrderAction.fulfilled.type, undefined]
    ]);
  });

  it('acceptPersonalOrderAction', async () => {
    mockApi
      .onPatch(`${APIRoute.PersonalOrder}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerPersonalOrder);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(acceptPersonalOrderAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [acceptPersonalOrderAction.pending.type, undefined],
      [personalOrderAction.type, fakerPersonalOrder],
      [acceptPersonalOrderAction.fulfilled.type, undefined]
    ]);
  });

  it('rejectPersonalOrderAction', async () => {
    mockApi
      .onPatch(`${APIRoute.PersonalOrder}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerPersonalOrder);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(rejectPersonalOrderAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [rejectPersonalOrderAction.pending.type, undefined],
      [personalOrderAction.type, fakerPersonalOrder],
      [rejectPersonalOrderAction.fulfilled.type, undefined]
    ]);
  });

});

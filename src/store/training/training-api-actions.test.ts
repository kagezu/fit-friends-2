import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerTraining } from '../../utils/mock-data';
import { responseError } from '../error/error-process';
import { createTrainingAction, getMyBuyTrainingsAction, getMyTrainingsAction, getTrainingAction, getTrainingsAction, updateTrainingAction } from './training-api-actions';
import { trainingAction, trainingFiltred, trainingsAction } from './training-slice';

const MOCK_ID = 'id';

describe('training-api', () => {
  const store: mockStoreType = mockStore();
  beforeEach(() => {
    store.clearActions();
  });

  it('getTrainingsAction', async () => {
    mockApi
      .onGet(APIRoute.Training)
      .reply(HTTPCode.OK, [fakerTraining]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getTrainingsAction({ params: {}, trainingsAction }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getTrainingsAction.pending.type, undefined],
      [trainingsAction.type, [fakerTraining]],
      [getTrainingsAction.fulfilled.type, undefined]
    ]);
  });

  it('getMyTrainingsAction', async () => {
    mockApi
      .onGet(APIRoute.MyTraining)
      .reply(HTTPCode.OK, [fakerTraining]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getMyTrainingsAction({ params: {}, trainingsAction }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getMyTrainingsAction.pending.type, undefined],
      [trainingsAction.type, [fakerTraining]],
      [getMyTrainingsAction.fulfilled.type, undefined]
    ]);
  });

  it('getMyBuyTrainingsAction', async () => {
    mockApi
      .onGet(APIRoute.TrainingBuy)
      .reply(HTTPCode.OK, [fakerTraining]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getMyBuyTrainingsAction());
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getMyBuyTrainingsAction.pending.type, undefined],
      [trainingFiltred.type, [fakerTraining]],
      [getMyBuyTrainingsAction.fulfilled.type, undefined]
    ]);
  });

  it('getTrainingAction', async () => {
    mockApi
      .onGet(`${APIRoute.TrainingDetail}/${MOCK_ID}`)
      .reply(HTTPCode.OK, [fakerTraining]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getTrainingAction({ id: MOCK_ID, navigate: () => undefined }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getTrainingAction.pending.type, undefined],
      [trainingAction.type, [fakerTraining]],
      [getTrainingAction.fulfilled.type, undefined]
    ]);
  });

  it('createTrainingAction', async () => {
    mockApi
      .onPost(APIRoute.TrainingCreate)
      .reply(HTTPCode.OK, fakerTraining);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(createTrainingAction({ request: fakerTraining, navigate: () => undefined }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [createTrainingAction.pending.type, undefined],
      [trainingAction.type, fakerTraining],
      [responseError.type, {}],
      [createTrainingAction.fulfilled.type, undefined]
    ]);
  });

  it('updateTrainingAction', async () => {
    mockApi
      .onPatch(`${APIRoute.TrainingCreate}/${MOCK_ID}`)
      .reply(HTTPCode.OK, fakerTraining);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(updateTrainingAction({ request: fakerTraining, id: MOCK_ID }));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [updateTrainingAction.pending.type, undefined],
      [trainingAction.type, fakerTraining],
      [responseError.type, {}],
      [updateTrainingAction.fulfilled.type, undefined]
    ]);
  });

});

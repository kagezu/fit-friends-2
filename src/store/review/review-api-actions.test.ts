import { APIRoute, HTTPCode } from '../../const';
import { mockApi, mockStoreType, mockStore, extractActions } from '../../utils/mock-api';
import { fakerReview, reviewData } from '../../utils/mock-data';
import { responseError } from '../error/error-process';
import { createReviewsAction, getReviewsAction } from './review-api-actions';
import { reviewAction, reviewsAction } from './review-slice';

const MOCK_ID = 'id';

describe('review-api', () => {
  const store: mockStoreType = mockStore();
  beforeEach(() => {
    store.clearActions();
  });

  it('getReviewsAction', async () => {
    mockApi
      .onGet(`${APIRoute.Review}/${MOCK_ID}`)
      .reply(HTTPCode.OK, [fakerReview]);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(getReviewsAction(MOCK_ID));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [getReviewsAction.pending.type, undefined],
      [reviewsAction.type, [fakerReview]],
      [getReviewsAction.fulfilled.type, undefined]
    ]);
  });


  it('createReviewsAction', async () => {
    mockApi
      .onPost(APIRoute.Review)
      .reply(HTTPCode.OK, fakerReview);
    expect([])
      .toEqual(store.getActions());
    await store.dispatch(createReviewsAction(reviewData));
    const actions = extractActions(store.getActions());
    expect(actions).toEqual([
      [createReviewsAction.pending.type, undefined],
      [reviewAction.type, fakerReview],
      [responseError.type, {}],
      [createReviewsAction.fulfilled.type, undefined]
    ]);
  });

});

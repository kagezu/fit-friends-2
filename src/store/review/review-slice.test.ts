import { emptyAction, fakerReview } from '../../utils/mock-data';
import { reviewsSlice, reviewsInitialState, reviewsAction, reviewAction } from './review-slice';

describe('reviewsSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = reviewsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(reviewsInitialState);
  });

  it('Должен вернуть список отзывов', () => {
    const state = reviewsInitialState;
    const result = reviewsSlice.reducer(state, reviewsAction([fakerReview, fakerReview]));
    expect(result).toEqual([fakerReview, fakerReview]);
  });

  it('Должен вернуть список отзывов с новым отзывом', () => {
    const state = [fakerReview, fakerReview];
    const newReview = { ...fakerReview, textReview: 'Это новый отзыв' };
    const result = reviewsSlice.reducer(state, reviewAction(newReview));
    expect(result).toEqual([newReview, fakerReview, fakerReview,]);
  });
});

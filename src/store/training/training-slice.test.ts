import { emptyAction, fakerTraining } from '../../utils/mock-data';
import { trainingSpecialSlice, trainingsInitialState, trainingSpecialForYou, trainingAction, trainingFiltred, trainingFiltredSlice, trainingOffers, trainingOffersSlice, trainingSlice, trainingsAction, trainingsSlice, trainingInitialState } from './training-slice';

describe('trainingSpecialSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = trainingSpecialSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(trainingsInitialState);
  });

  it('Должен вернуть список тренировок', () => {
    const state = trainingsInitialState;
    const result = trainingSpecialSlice.reducer(state, trainingSpecialForYou([fakerTraining]));
    expect(result).toEqual([fakerTraining]);
  });
});

describe('trainingsSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = trainingsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(trainingsInitialState);
  });

  it('Должен вернуть список тренировок', () => {
    const state = trainingsInitialState;
    const result = trainingsSlice.reducer(state, trainingsAction([fakerTraining]));
    expect(result).toEqual([fakerTraining]);
  });
});

describe('trainingOffersSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = trainingOffersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(trainingsInitialState);
  });

  it('Должен вернуть список тренировок', () => {
    const state = trainingsInitialState;
    const result = trainingOffersSlice.reducer(state, trainingOffers([fakerTraining]));
    expect(result).toEqual([fakerTraining]);
  });
});

describe('trainingFiltredSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = trainingFiltredSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(trainingsInitialState);
  });

  it('Должен вернуть список тренировок', () => {
    const state = trainingsInitialState;
    const result = trainingFiltredSlice.reducer(state, trainingFiltred([fakerTraining]));
    expect(result).toEqual([fakerTraining]);
  });
});

describe('trainingSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = trainingSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(trainingInitialState);
  });

  it('Должен вернуть список тренировок', () => {
    const state = trainingInitialState;
    const result = trainingSlice.reducer(state, trainingAction(fakerTraining));
    expect(result).toEqual(fakerTraining);
  });
});


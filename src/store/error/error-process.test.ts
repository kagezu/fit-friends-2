import { emptyAction } from '../../utils/mock-data';
import { errorInitialState, errorProcess, responseError } from './error-process';

describe('errorProcess', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = errorProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(errorInitialState);
  });

  it('Должен вернуть объект c ошибками', () => {
    const state = errorInitialState;
    const result = errorProcess.reducer(state, responseError({ message: 'error' }));
    expect(result).toEqual({ message: 'error' });
  });
});

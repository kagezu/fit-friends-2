import { emptyAction, fakerBalance } from '../../utils/mock-data';
import { balanceInitialState, balanceAction, balanceSlice } from './balance-slice';

describe('balanceSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = balanceSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(balanceInitialState);
  });

  it('Должен вернуть объект пользователя', () => {
    const state = balanceInitialState;
    const result = balanceSlice.reducer(state, balanceAction(fakerBalance));
    expect(result).toEqual(fakerBalance);
  });
});

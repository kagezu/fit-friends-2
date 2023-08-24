import { emptyAction, fakerNotifies } from '../../utils/mock-data';
import { notifyDelete, notifyInitialState, notifyProcess, notifyUpdate } from './notify-process';

describe('notifyProcess', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = notifyProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(notifyInitialState);
  });

  it('Должен вернуть список уведомлений', () => {
    const state = notifyInitialState;
    const result = notifyProcess.reducer(state, notifyUpdate(fakerNotifies));
    expect(result).toEqual(fakerNotifies);
  });

  it('Должен вернуть объект пользователя', () => {
    const state = fakerNotifies;
    const result = notifyProcess.reducer(state, notifyDelete(1));
    expect(result).toEqual([fakerNotifies[0], fakerNotifies[2]]);
  });
});

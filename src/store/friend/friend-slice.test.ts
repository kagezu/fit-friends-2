import { emptyAction, fakerUser, fakerCoach } from '../../utils/mock-data';
import { Friend } from '../../types/friend';
import { friendsSlice, friendsAction } from './friend-slice';

describe('friendsSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = friendsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual([]);
  });

  it('Должен вернуть список объектов с друзьями', () => {
    const state = [] as Friend[];
    const result = friendsSlice.reducer(state, friendsAction([{ friend: fakerUser }, { friend: fakerCoach }]));
    expect(result).toEqual([{ friend: fakerUser }, { friend: fakerCoach }]);
  });
});

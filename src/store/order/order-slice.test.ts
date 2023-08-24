import { emptyAction, fakerPersonalOrder } from '../../utils/mock-data';
import { PersonalOrder } from '../../types/personal-order';
import { personalOrderSlice, initialPersonalOrder, personalOrderAction, personalOrdersSlice, personalOrdersAction } from './order-slice';

describe('personalOrderSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = personalOrderSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(initialPersonalOrder);
  });

  it('Должен вернуть список уведомлений', () => {
    const state = initialPersonalOrder;
    const result = personalOrderSlice.reducer(state, personalOrderAction(fakerPersonalOrder));
    expect(result).toEqual(fakerPersonalOrder);
  });
});

describe('personalOrdersSlice', () => {
  it('Должен вернуть начальное состояние по умолчанию', () => {
    const result = personalOrdersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual([]);
  });

  it('Должен вернуть список уведомлений', () => {
    const state = [] as PersonalOrder[];
    const result = personalOrdersSlice.reducer(state, personalOrdersAction([fakerPersonalOrder, fakerPersonalOrder]));
    expect(result).toEqual([fakerPersonalOrder, fakerPersonalOrder]);
  });
});

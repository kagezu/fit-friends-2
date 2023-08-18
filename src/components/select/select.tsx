import { useState, SyntheticEvent } from 'react';
import { toUpperCaseFirst } from '../../utils/util';

type selectProps = {
  text: string;
  name: string;
  value?: string;
  error?: string;
  options: string[];
  onUpdate: (name: string, value: string) => void;
  disabled?: boolean;
}

export default function Select({ text, name, value = '', error, options, onUpdate, disabled }: selectProps): JSX.Element {
  const [isOpenList, setIsOpenList] = useState(false);

  const handleOptionClick = (evt: SyntheticEvent<HTMLOptionElement>) => {
    const newValue = (evt.target as HTMLOptionElement).value;
    onUpdate(name, newValue);
    setIsOpenList(false);
  };

  return (
    <div
      className={
        `
      custom-select  user-info-edit__select
      ${disabled ? ' custom-select--readonly' : ''}
      ${error ? ' custom-input--error' : ''}
      ${isOpenList ? ' is-open' : ''}
    `
      }
    >
      <span className="custom-select__label">{text}</span>
      <button
        className="custom-select__button"
        type="button"
        aria-label="Выберите одну из опций"
        onClick={() => setIsOpenList(!isOpenList)}
        disabled={disabled}
      >
        <span className="custom-select__placeholder">{value ? toUpperCaseFirst(value) : ''}</span>
        <span className="custom-select__icon">
          <svg width="15" height="6" aria-hidden="true">
            <use xlinkHref="#arrow-down"></use>
          </svg>
        </span>
      </button>
      <ul className="custom-select__list" role="listbox">
        {
          options.map((key) => (
            <option
              className='custom-select__item capitalize'
              key={key}
              value={key}
              role='listitem'
              onClick={handleOptionClick}
            >{toUpperCaseFirst(key)}
            </option>
          ))
        }
      </ul>
      {error ? <span className="custom-input__error">{error}</span> : ''}
    </div>
  );
}

import { ChangeEvent, useEffect, useState } from 'react';
import { UserQuery } from '../../types/user-query';
import { AppRoute, Sort, TrainingLevel, TrainingType } from '../../const';
import { locations } from '../../types/arrays';
import { Link } from 'react-router-dom';

const DEFAULT_LIMIT_LIST = 5;

let checkedLocations: string[] = [];
let checkedTrainingTypes: string[] = [];
const setLocations = (value: string[]) => { checkedLocations = value; };
const setTrainingTypes = (value: string[]) => { checkedTrainingTypes = value; };

export default function UsersFilter({ onChange, params }: { onChange: (params: UserQuery) => void; params: UserQuery }): JSX.Element {
  const [isLocationsLimit, setIsLocationsLimit] = useState<boolean>(true);
  const [isTrainingTypesLimit, setIsTrainingTypesLimit] = useState<boolean>(true);
  const isTrainingTypes = (value: string) => checkedTrainingTypes.some((item) => item === value);
  const handleTrainingTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (evt.target.checked) {
      setTrainingTypes([...checkedTrainingTypes, value]);
    } else {
      setTrainingTypes(checkedTrainingTypes.filter((item) => item !== value));
    }
    onChange({ trainingTypes: checkedTrainingTypes.join(',') });
  };

  const isLocation = (value: string) => checkedLocations.some((item) => item === value);
  const handleLocationChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (evt.target.checked) {
      setLocations([...checkedLocations, value]);
    } else {
      setLocations(checkedLocations.filter((item) => item !== value));
    }
    onChange({ location: checkedLocations.join(',') });
  };

  useEffect(() => {
    if (params.location) {
      setLocations(params.location?.split(','));
    }
    if (params.trainingTypes) {
      setTrainingTypes(params.trainingTypes?.split(','));
    }
  });

  return (
    <div className="user-catalog-form">
      <h2 className="visually-hidden">Каталог пользователя</h2>
      <div className="user-catalog-form__wrapper">
        <Link className="btn-flat btn-flat--underlined user-catalog-form__btnback" to={AppRoute.Index}>
          <svg width="14" height="10" aria-hidden="true">
            <use xlinkHref="#arrow-left"></use>
          </svg><span>Назад</span>
        </Link>
        <h3 className="user-catalog-form__title">Фильтры</h3>
        <form className="user-catalog-form__form">
          <div className="user-catalog-form__block user-catalog-form__block--location">
            <h4 className="user-catalog-form__block-title">Локация, станция метро</h4>
            <ul className="user-catalog-form__check-list">

              {
                Object
                  .values(locations)
                  .slice(0, isLocationsLimit ? DEFAULT_LIMIT_LIST : undefined)
                  .map((value) => (
                    <li key={value} className="user-catalog-form__check-list-item">
                      <div className="custom-toggle custom-toggle--checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="trainingTypes"
                            value={value}
                            checked={isLocation(value)}
                            onChange={handleLocationChange}
                          />
                          <span className="custom-toggle__icon">
                            <svg width="9" height="6" aria-hidden="true">
                              <use xlinkHref="#arrow-check"></use>
                            </svg>
                          </span>
                          <span className="custom-toggle__label">{value}</span>
                        </label>
                      </div>
                    </li>
                  ))
              }
            </ul>
            {
              isLocationsLimit ?
                <button onClick={() => setIsLocationsLimit(false)} className="btn-show-more user-catalog-form__btn-show" type="button">
                  <span>Посмотреть все</span>
                  <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                    <use xlinkHref="#arrow-down"></use>
                  </svg>
                </button> : null
            }
          </div>
          <div className="user-catalog-form__block user-catalog-form__block--spezialization">
            <h4 className="user-catalog-form__block-title">Специализация</h4>
            <ul className="user-catalog-form__check-list">
              {
                Object
                  .values(TrainingType)
                  .slice(0, isTrainingTypesLimit ? DEFAULT_LIMIT_LIST : undefined)
                  .map((value) => (
                    <li key={value} className="user-catalog-form__check-list-item">
                      <div className="custom-toggle custom-toggle--checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="trainingTypes"
                            value={value}
                            checked={isTrainingTypes(value)}
                            onChange={handleTrainingTypeChange}
                          />
                          <span className="custom-toggle__icon">
                            <svg width="9" height="6" aria-hidden="true">
                              <use xlinkHref="#arrow-check"></use>
                            </svg>
                          </span>
                          <span className="custom-toggle__label">{value}</span>
                        </label>
                      </div>
                    </li>
                  ))
              }
            </ul>
            {
              isTrainingTypesLimit ?
                <button onClick={() => setIsTrainingTypesLimit(false)} className="btn-show-more user-catalog-form__btn-show" type="button">
                  <span>Посмотреть все</span>
                  <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                    <use xlinkHref="#arrow-down"></use>
                  </svg>
                </button> : null
            }
          </div>
          <div className="user-catalog-form__block user-catalog-form__block--level">
            <h4 className="user-catalog-form__block-title">Ваш уровень</h4>
            <div className="custom-toggle-radio">
              <div className="custom-toggle-radio__block">
                <label>
                  <input onChange={() => onChange({ trainingLevel: TrainingLevel.Beginner })} type="radio" name="user-agreement"
                    checked={params.trainingLevel === TrainingLevel.Beginner}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Новичок</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input onChange={() => onChange({ trainingLevel: TrainingLevel.Amateur })} type="radio" name="user-agreement"
                    checked={params.trainingLevel === TrainingLevel.Amateur}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Любитель</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input onChange={() => onChange({ trainingLevel: TrainingLevel.Professional })} type="radio" name="user-agreement"
                    checked={params.trainingLevel === TrainingLevel.Professional}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">Профессионал</span>
                </label>
              </div>
            </div>
          </div>
          <div className="user-catalog-form__block">
            <h3 className="user-catalog-form__title user-catalog-form__title--sort">Сортировка</h3>
            <div className="btn-radio-sort">
              <label>
                <input onChange={() => onChange({ sortDirection: Sort.Desc, category: 'role' })} type="radio" name="sort" />
                <span className="btn-radio-sort__label">Тренеры</span>
              </label>
              <label>
                <input onChange={() => onChange({ sortDirection: Sort.Asc, category: 'role' })} type="radio" name="sort" />
                <span className="btn-radio-sort__label">Пользователи</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { Slider } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { TrainingQuery } from '../../types/training-query';
import { AppRoute, Intervals } from '../../const';
import { Link } from 'react-router-dom';
import { sliderStyle, sliderSlotProps } from '../training-filter/slider-style';

enum Index {
  Min = 0,
  Max = 1
}

enum PriceCount {
  Min = 0,
  Max = 5000,
  Step = 100
}

enum CaloriesCount {
  Min = 1000,
  Max = 5000,
  Step = 100
}

enum RankingCount {
  Min = 0,
  Max = 5,
  Step = 1
}

let intervals: string[] = [];
const setInterval = (value: string[]) => { intervals = value; };

export default function MyTrainingFilter({ onChange }: { onChange: (params: TrainingQuery) => void }): JSX.Element {
  const [prices, setPrices] = useState<number[]>([PriceCount.Min, PriceCount.Max]);
  const [calories, setCalories] = useState<number[]>([CaloriesCount.Min, CaloriesCount.Max]);
  const [rankings, setRankings] = useState<number[]>([RankingCount.Min, RankingCount.Max]);

  const handleMinPriceChange = (evt: ChangeEvent<HTMLInputElement>) => setPrices([+evt.target.value, prices[Index.Max]]);
  const handleMaxPriceChange = (evt: ChangeEvent<HTMLInputElement>) => setPrices([prices[Index.Min], +evt.target.value]);
  const handlePriceChange = (event: Event, value: number | number[]) => {
    const [min, max] = value as number[];
    if (min < max) {
      setPrices(value as number[]);
    }
  };

  const handleMinCaloriesChange = (evt: ChangeEvent<HTMLInputElement>) => setCalories([+evt.target.value, calories[Index.Max]]);
  const handleMaxCaloriesChange = (evt: ChangeEvent<HTMLInputElement>) => setCalories([calories[Index.Max], +evt.target.value]);
  const handleCaloriesChange = (event: Event, value: number | number[]) => {
    const [min, max] = value as number[];
    if (min < max) {
      setCalories(value as number[]);
    }
  };

  const handleRankingChange = (event: Event, value: number | number[]) => {
    const [min, max] = value as number[];
    if (min <= max) {
      setRankings(value as number[]);
    }
  };

  const isIntervals = (value: string) => intervals.some((item) => item === value);
  const handleIntervalsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (evt.target.checked) {
      setInterval([...intervals, value]);
    } else {
      setInterval(intervals.filter((item) => item !== value));
    }
    handleUpdate();
  };

  const handleUpdate = () => {
    const interval = intervals.join(',');
    onChange(Object.assign({
      priceFrom: prices[Index.Min],
      priceTo: prices[Index.Max],
      caloriesFrom: calories[Index.Min],
      caloriesTo: calories[Index.Max],
      ratingFrom: rankings[Index.Min],
      ratingTo: rankings[Index.Max]
    }, interval ? { interval } : {}
    ));
  };

  return (
    <div className="gym-catalog-form">
      <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
      <div className="gym-catalog-form__wrapper">
        <Link to={AppRoute.PersonalAccountCoach} className="btn-flat btn-flat--underlined gym-catalog-form__btnback" type="button">
          <svg width="14" height="10" aria-hidden="true">
            <use xlinkHref="#arrow-left"></use>
          </svg><span>Назад</span>
        </Link>
        <h3 className="gym-catalog-form__title">Фильтры</h3>
        <form className="gym-catalog-form__form">
          <div className="gym-catalog-form__block gym-catalog-form__block--price">
            <h4 className="gym-catalog-form__block-title">Цена, ₽</h4>
            <div className="filter-price">
              <div className="filter-price__input-text filter-price__input-text--min">
                <input type="number" id="text-min" name="text-min" value={prices[Index.Min]}
                  onChange={handleMinPriceChange}
                  min={PriceCount.Min}
                  max={PriceCount.Max}
                />
                <label htmlFor="ltext-min">от</label>
              </div>
              <div className="filter-price__input-text filter-price__input-text--max">
                <input type="number" id="text-max" name="text-max" value={prices[Index.Max]}
                  onChange={handleMaxPriceChange}
                  min={PriceCount.Min}
                  max={PriceCount.Max}
                />
                <label htmlFor="text-max">до</label>
              </div>
            </div>
            <Slider
              sx={sliderStyle}
              slotProps={sliderSlotProps}
              value={prices}
              min={PriceCount.Min}
              max={PriceCount.Max}
              step={PriceCount.Step}
              onChange={handlePriceChange}
              onClick={handleUpdate}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--calories">
            <h4 className="gym-catalog-form__block-title">Калории</h4>
            <div className="filter-calories">
              <div className="filter-calories__input-text filter-calories__input-text--min">
                <input type="number" id="text-min-cal" name="text-min-cal" value={calories[Index.Min]}
                  onChange={handleMinCaloriesChange}
                  min={CaloriesCount.Min}
                  max={CaloriesCount.Max}
                />
                <label htmlFor="text-min-cal">от</label>
              </div>
              <div className="filter-calories__input-text filter-calories__input-text--max">
                <input type="number" id="text-max-cal" name="text-max-cal" value={calories[Index.Max]}
                  onChange={handleMaxCaloriesChange}
                  min={CaloriesCount.Min}
                  max={CaloriesCount.Max}
                />
                <label htmlFor="text-max-cal">до</label>
              </div>
            </div>
            <Slider
              sx={sliderStyle}
              slotProps={sliderSlotProps}
              value={calories}
              min={CaloriesCount.Min}
              max={CaloriesCount.Max}
              step={CaloriesCount.Step}
              onChange={handleCaloriesChange}
              onClick={handleUpdate}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--rating">
            <h4 className="gym-catalog-form__block-title">Рейтинг</h4>
            <Slider
              sx={sliderStyle}
              slotProps={sliderSlotProps}
              value={rankings}
              min={RankingCount.Min}
              step={RankingCount.Step}
              max={RankingCount.Max}
              marks
              onChange={handleRankingChange}
              onClick={handleUpdate}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--type">
            <h4 className="gym-catalog-form__block-title">Длительность</h4>
            <ul className="my-training-form__check-list">
              {
                Object
                  .values(Intervals)
                  .map((value) => (
                    <li key={value} className="my-training-form__check-list-item">
                      <div className="custom-toggle custom-toggle--checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="interval"
                            value={value}
                            checked={isIntervals(value)}
                            onChange={handleIntervalsChange}
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
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState, ChangeEvent, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError } from '../../store/selectors';
import { OrderData } from '../../types/order-data';
import { Training } from '../../types/training';
import { ESCAPE_KEY, PaymentMethod } from '../../const';
import { createNewOrderAction } from '../../store/order/order-api-actions';

const DEFAULT_COUNT_PIECES = 5;

export default function PopupBuy({ training, onClose }: { training: Training; onClose: () => void }): JSX.Element {
  const [request, setRequest] = useState<OrderData>({
    training: training.id,
    count: DEFAULT_COUNT_PIECES,
    paymentMethod: PaymentMethod.Visa
  });
  const errors = useAppSelector(getError);
  const dispatch = useAppDispatch();

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };
  const handleAddCountClick = () => setRequest({ ...request, count: request.count + 1 });
  const handleDecCountClick = () => setRequest({ ...request, count: request.count > 1 ? request.count - 1 : 1 });
  const handleSubmit = () => {
    dispatch(createNewOrderAction(request))
      .finally(() => {
        if (!errors.error) {
          onClose();
        }
      });
  };

  const handleEscapeKeydown = (evt: KeyboardEvent) => {
    if (evt.key === ESCAPE_KEY) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeydown);
    document.body.classList.add('scroll-lock-ios');
    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
      document.body.classList.remove('scroll-lock-ios');
    };
  });

  return (
    <div className="popup-form">
      <section className="popup">
        <div className="popup__wrapper">
          <div className="popup-head">
            <h2 className="popup-head__header">Купить тренировку</h2>
            <button onClick={onClose} className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close">
              <svg width="20" height="20" aria-hidden="true">
                <use xlinkHref="#icon-cross"></use>
              </svg>
            </button>
          </div>
          <div className="popup__content popup__content--purchases">
            <div className="popup__product">
              <div className="popup__product-image">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`../img/content/thumbnails/${training.background ?? ''}.webp, ../img/content/thumbnails/${training.background ?? ''}@2x.webp 2x`}
                  />
                  <img src={`../img/content/thumbnails/${training.background ?? ''}.jpg`} srcSet={`../img/content/thumbnails/${training.background ?? ''}@2x.jpg 2x`}
                    width="98" height="80" alt=""
                  />
                </picture>
              </div>
              <div className="popup__product-info">
                <h3 className="popup__product-title">{training.title}</h3>
                <p className="popup__product-price">{training.price} ₽</p>
              </div>
              <div className="popup__product-quantity">
                <p className="popup__quantity">Количество</p>
                <div className="input-quantity">
                  <button onClick={handleDecCountClick} className="btn-icon btn-icon--quantity" type="button" aria-label="minus">
                    <svg width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-minus"></use>
                    </svg>
                  </button>
                  <div className="input-quantity__input">
                    <label>
                      <input type="text" value={request.count} readOnly />
                    </label>
                  </div>
                  <button onClick={handleAddCountClick} className="btn-icon btn-icon--quantity" type="button" aria-label="plus">
                    <svg width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-plus"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <section className="payment-method">
              <h4 className="payment-method__title">Выберите способ оплаты</h4>
              <ul className="payment-method__list">
                <li className="payment-method__item">
                  <div className="btn-radio-image">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="paymentMethod" aria-label="Visa." defaultChecked />
                      <span className="btn-radio-image__image">
                        <svg width="58" height="20" aria-hidden="true">
                          <use xlinkHref="#visa-logo"></use>
                        </svg>
                      </span>
                    </label>
                  </div>
                </li>
                <li className="payment-method__item">
                  <div className="btn-radio-image">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="paymentMethod" aria-label="Мир." />
                      <span className="btn-radio-image__image">
                        <svg width="66" height="20" aria-hidden="true">
                          <use xlinkHref="#mir-logo"></use>
                        </svg>
                      </span>
                    </label>
                  </div>
                </li>
                <li className="payment-method__item">
                  <div className="btn-radio-image">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="paymentMethod" aria-label="Iomoney." />
                      <span className="btn-radio-image__image">
                        <svg width="106" height="24" aria-hidden="true">
                          <use xlinkHref="#iomoney-logo"></use>
                        </svg>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </section>
            <div className="popup__total">
              <p className="popup__total-text">Итого</p>
              <svg className="popup__total-dash" width="310" height="2" aria-hidden="true">
                <use xlinkHref="#dash-line"></use>
              </svg>
              <p className="popup__total-price">{(training.price * request.count).toLocaleString()}&nbsp;₽</p>
            </div>
            <div className="popup__button">
              <button onClick={handleSubmit} className="btn" type="button">Купить</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

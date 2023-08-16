import { useEffect, useState } from 'react';
import { ESCAPE_KEY } from '../../const';
import { User } from '../../types/user';
import CertificateCard from '../certificate-card/certificate-card';

export default function PopupCertificates({ user, onClose }: { user: User; onClose: () => void }): JSX.Element {
  const [position, setPosition] = useState<number>(0);

  const handleRightClick = () => setPosition(position + 1);
  const handleLeftClick = () => setPosition(position - 1);
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
    <main>
      <div className="popup-form">
        <section className="popup">
          <div className="popup__wrapper">

            <div className="popup-head">
              <h2 className="popup-head__header">Сертификаты</h2>
              <button onClick={onClose} className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-cross"></use>
                </svg>
              </button>
            </div>
            <div className="popup__content popup__content--certificates">
              <div className="popup__slider-buttons">
                <button
                  onClick={handleLeftClick}
                  className="btn-icon popup__slider-btn popup__slider-btn--prev"
                  type="button"
                  aria-label="previous"
                  disabled={!position}
                >
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#arrow-left"></use>
                  </svg>
                </button>
                <button
                  onClick={handleRightClick}
                  className="btn-icon popup__slider-btn popup__slider-btn--next"
                  type="button"
                  aria-label="next"
                  disabled={user.certificate ? (position >= user.certificate?.length - 1) : true}
                >
                  <svg width="16" height="14" aria-hidden="true">
                    <use xlinkHref="#arrow-right"></use>
                  </svg>
                </button>
              </div>
              <ul className="popup__slider-list">
                {
                  user.certificate ?
                    user.certificate
                      .slice(position, position + 1)
                      .map(({ id, path }) => (
                        <CertificateCard
                          key={id}
                          id={id}
                          path={path}
                          onDelete={() => ''}
                        />)) :
                    <li className="popup__slide popup__slide--current">
                      <div className="popup__slide-img">
                        <picture>
                          <img src="" alt="Сертификат" width="294" height="360" />
                        </picture>
                      </div>
                    </li>
                }
              </ul>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

import { useEffect } from 'react';
import { ESCAPE_KEY } from '../../const';
import { User } from '../../types/user';

export default function PopupUserMap({ user, onClose }: { user: User; onClose: () => void }): JSX.Element {
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
          <div className="popup__wrapper popup__wrapper--map">
            <div className="popup-head popup-head--address">
              <h2 className="popup-head__header">{user.name}</h2>
              <p className="popup-head__address">
                <svg className="popup-head__icon-location" width="12" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-location"></use>
                </svg><span>м. {user.location}</span>
              </p>
              <button onClick={onClose} className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-cross"></use>
                </svg>
              </button>
            </div>
            <div className="popup__content-map">
              <div className="popup__map">
                <picture>
                  <source type="image/webp" srcSet="/img/content/popup/map.webp, /img/content/popup/map@2x.webp 2x" />
                  <img src="/img/content/popup/map.jpg" srcSet="/img/content/popup/map@2x.jpg 2x" width="1160" height="623" alt="" />
                </picture>
                <div className="popup__pin popup__pin--user">
                  <svg className="popup__pin-icon" width="40" height="49" aria-hidden="true">
                    <use xlinkHref="#icon-pin-user"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

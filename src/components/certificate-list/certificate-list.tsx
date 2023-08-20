import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/selectors';
import CertificateCard from '../certificate-card/certificate-card';
import { userInfoEditAction } from '../../store/user/user-api-actions';

const MAX_COUNT_ELEMENT = 3;

export default function CertificateList(): JSX.Element {
  const user = useAppSelector(getUser);
  const [position, setPosition] = useState<number>(0);
  const dispatch = useAppDispatch();
  const handleCertificateChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const file = evt.target.files[0];
      dispatch(userInfoEditAction({ certificate: file }));
    }
  };
  const handleRightClick = () => setPosition(position + 1);
  const handleLeftClick = () => setPosition(position - 1);
  const handleCertificateDelete = (deleteId: string) => {
    if (user.certificate) {
      dispatch(userInfoEditAction({
        certificate: user.certificate
          .filter(({ id }) => id !== deleteId)
          .map(({ id }) => id)
          .join(',')
      }));
    }
  };

  return (
    <div className="personal-account-coach__additional-info">
      <div className="personal-account-coach__label-wrapper">
        <h2 className="personal-account-coach__label">Дипломы и сертификаты</h2>
        <form>
          <label>
            <input
              className="visually-hidden"
              type="file"
              name="avatar"
              accept="image/png, image/jpeg, application/pdf"
              onChange={handleCertificateChange}
            />
            <span className="btn-flat btn-flat--underlined personal-account-coach__button">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-import"></use>
              </svg><span>Загрузить</span>
            </span>
          </label>
        </form>
        <div className="personal-account-coach__controls">
          <button
            onClick={handleLeftClick}
            className="btn-icon personal-account-coach__control"
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
            className="btn-icon personal-account-coach__control"
            type="button"
            aria-label="next"
            disabled={user.certificate ? (position >= user.certificate?.length - MAX_COUNT_ELEMENT) : true}
          >
            <svg width="16" height="14" aria-hidden="true">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <ul className="personal-account-coach__list">
        {
          user.certificate ?
            user.certificate
              .slice(position, position + MAX_COUNT_ELEMENT)
              .map(({ id, path }) => (
                <CertificateCard
                  key={id}
                  id={id}
                  path={path}
                  onDelete={handleCertificateDelete}
                  editable
                />)) : ''
        }
      </ul>
    </div >
  );
}

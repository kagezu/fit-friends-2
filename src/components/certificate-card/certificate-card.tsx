import { useState } from 'react';
import { STATIC_PATH } from '../../const';

type propCertificateCard = {
  id: string;
  path: string;
  onDelete: (id: string) => void;
  editable?: boolean;
}

export default function CertificateCard({ id, path, onDelete, editable }: propCertificateCard): JSX.Element {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <li className="personal-account-coach__item">
      <div className={isEdit ? 'certificate-card certificate-card--edit' : 'certificate-card'}>
        <div className="certificate-card__image">
          <embed src={`${STATIC_PATH}${path}`} width="294" height="360" />
        </div>
        {
          editable ?
            <div className="certificate-card__buttons">
              <button onClick={() => setIsEdit(true)} className="btn-flat btn-flat--underlined certificate-card__button certificate-card__button--edit" type="button">
                <svg width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-edit"></use>
                </svg>
                <span>Изменить</span>
              </button>
              <button onClick={() => setIsEdit(false)} className="btn-flat btn-flat--underlined certificate-card__button certificate-card__button--save" type="button">
                <svg width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-edit"></use>
                </svg>
                <span>Сохранить</span>
              </button>
              <div className="certificate-card__controls">
                <button className="btn-icon certificate-card__control" type="button" aria-label="next" disabled>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-change"></use>
                  </svg>
                </button>
                <button onClick={() => onDelete(id)} className="btn-icon certificate-card__control" type="button" aria-label="next">
                  <svg width="14" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-trash"></use>
                  </svg>
                </button>
              </div>
            </div> : null
        }
      </div>
    </li>
  );
}

export default function SignUp(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container"><a className="header__logo" href="index.html" aria-label="Переход на главную">
          <svg width="187" height="70" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg></a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item"><a className="main-nav__link is-active" href="#" aria-label="На главную">
                <svg width="18" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-home"></use>
                </svg></a></li>
              <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Личный кабинет">
                <svg width="16" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-user"></use>
                </svg></a></li>
              <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Друзья">
                <svg width="22" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-friends"></use>
                </svg></a></li>
              <li className="main-nav__item main-nav__item--notifications"><a className="main-nav__link" href="#" aria-label="Уведомления">
                <svg width="14" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-notification"></use>
                </svg></a>
                <div className="main-nav__dropdown">
                  <p className="main-nav__label">Оповещения</p>
                  <ul className="main-nav__sublist">
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                      <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
                      <time className="notification__time" datetime="2023-12-23 12:35">23 декабря, 12:35</time></a>
                    </li>
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                      <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
                      <time className="notification__time" datetime="2023-12-22 09:22">22 декабря, 09:22</time></a>
                    </li>
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                      <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
                      <time className="notification__time" datetime="2023-12-18 18:50">18 декабря, 18:50</time></a>
                    </li>
                    <!--<li className="main-nav__subitem"><a className="notification" href="#">
                      <p className="notification__text">Наталья приняла приглашение на&nbsp;совместную тренировку</p>
                      <time className="notification__time" datetime="2023-12-14 08:15">14 декабря, 08:15</time></a>
                    </li>-->
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form action="#" method="get">
              <label><span className="search__label">Поиск</span>
                <input type="search" name="search">
                  <svg className="search__icon" width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-search"></use>
                  </svg>
              </label>
              <ul className="search__list">
                <li className="search__item"><a className="search__link" href="#">Бокс</a></li>
                <li className="search__item"><a className="search__link is-active" href="#">Бег</a></li>
                <li className="search__item"><a className="search__link" href="#">Аэробика</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
              </ul>
            </form>
          </div>
        </div>
      </header>
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог пользователей</h1>
              <div className="user-catalog-form">
                <h2 className="visually-hidden">Каталог пользователя</h2>
                <div className="user-catalog-form__wrapper">
                  <button className="btn-flat btn-flat--underlined user-catalog-form__btnback" type="button">
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="#arrow-left"></use>
                    </svg><span>Назад</span>
                  </button>
                  <h3 className="user-catalog-form__title">Фильтры</h3>
                  <form className="user-catalog-form__form">
                    <div className="user-catalog-form__block user-catalog-form__block--location">
                      <h4 className="user-catalog-form__block-title">Локация, станция метро</h4>
                      <ul className="user-catalog-form__check-list">
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="user-agreement-1" name="user-agreement" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Автово</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="user-agreement-1" name="user-agreement" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Адмиралтейская</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="user-agreement-1" name="user-agreement" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Академическая</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="user-agreement-1" name="user-agreement"><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Балтийская</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="user-agreement-1" name="user-agreement"><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Бухарестская</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button className="btn-show-more user-catalog-form__btn-show" type="button"><span>Посмотреть все</span>
                        <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                          <use xlinkHref="#arrow-down"></use>
                        </svg>
                      </button>
                    </div>
                    <div className="user-catalog-form__block user-catalog-form__block--spezialization">
                      <h4 className="user-catalog-form__block-title">Специализация</h4>
                      <ul className="user-catalog-form__check-list">
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="spezialization-1" name="spezialization" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Аэробика</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="spezialization-1" name="spezialization" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Бег</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="spezialization-1" name="spezialization" checked><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Бокс</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="spezialization-1" name="spezialization"><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Йога</span>
                            </label>
                          </div>
                        </li>
                        <li className="user-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="spezialization-1" name="spezialization"><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">Кроссфит</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button className="btn-show-more user-catalog-form__btn-show" type="button"><span>Посмотреть все</span>
                        <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                          <use xlinkHref="#arrow-down"></use>
                        </svg>
                      </button>
                    </div>
                    <div className="user-catalog-form__block user-catalog-form__block--level">
                      <h4 className="user-catalog-form__block-title">Ваш уровень</h4>
                      <div className="custom-toggle-radio">
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input type="radio" name="user-agreement"><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Новичок</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input type="radio" name="user-agreement" checked><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Любитель</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input type="radio" name="user-agreement" value="user-agreement-1"><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Профессионал</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="user-catalog-form__block">
                      <h3 className="user-catalog-form__title user-catalog-form__title--sort">Сортировка</h3>
                      <div className="btn-radio-sort">
                        <label>
                          <input type="radio" name="sort" checked><span className="btn-radio-sort__label">Тренеры</span>
                        </label>
                        <label>
                          <input type="radio" name="sort"><span className="btn-radio-sort__label">Пользователи</span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="inner-page__content">
                <div className="users-catalog">
                  <ul className="users-catalog__list">
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-01.webp, img/content/thumbnails/user-01@2x.webp 2x"><img src="img/content/thumbnails/user-01.jpg" srcSet="img/content/thumbnails/user-01@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Елизавета</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Петроградская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#йога</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-02.webp, img/content/thumbnails/user-02@2x.webp 2x"><img src="img/content/thumbnails/user-02.jpg" srcSet="img/content/thumbnails/user-02@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Дарья</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Адмиралтейская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-03.webp, img/content/thumbnails/user-03@2x.webp 2x"><img src="img/content/thumbnails/user-03.jpg" srcSet="img/content/thumbnails/user-03@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Наталья</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Василеостровская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#пилатес</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-08.webp, img/content/thumbnails/user-08@2x.webp 2x"><img src="img/content/thumbnails/user-08.jpg" srcSet="img/content/thumbnails/user-08@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Никита</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Садовая</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#йога</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-09.webp, img/content/thumbnails/user-09@2x.webp 2x"><img src="img/content/thumbnails/user-09.jpg" srcSet="img/content/thumbnails/user-09@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Татьяна</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Площадь Александра Невского</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#йога</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-10.webp, img/content/thumbnails/user-10@2x.webp 2x"><img src="img/content/thumbnails/user-10.jpg" srcSet="img/content/thumbnails/user-10@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Марк</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Технологический Институт</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-04.webp, img/content/thumbnails/user-04@2x.webp 2x"><img src="img/content/thumbnails/user-04.jpg" srcSet="img/content/thumbnails/user-04@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Диана</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Невский проспект</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#пилатес</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-11.webp, img/content/thumbnails/user-11@2x.webp 2x"><img src="img/content/thumbnails/user-11.jpg" srcSet="img/content/thumbnails/user-11@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Станислав</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Спортивная</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#йога</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-12.webp, img/content/thumbnails/user-12@2x.webp 2x"><img src="img/content/thumbnails/user-12.jpg" srcSet="img/content/thumbnails/user-12@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Катерина</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Адмиралтейская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#аэробика</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-13.webp, img/content/thumbnails/user-13@2x.webp 2x"><img src="img/content/thumbnails/user-13.jpg" srcSet="img/content/thumbnails/user-13@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Ксения</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Проспект Просвещения</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#аэробика</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-14.webp, img/content/thumbnails/user-14@2x.webp 2x"><img src="img/content/thumbnails/user-14.jpg" srcSet="img/content/thumbnails/user-14@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Сергей</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Девяткино</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#бокс</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#силовые</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-05.webp, img/content/thumbnails/user-05@2x.webp 2x"><img src="img/content/thumbnails/user-05.jpg" srcSet="img/content/thumbnails/user-05@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Константин</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Комендантский проспект</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#силовые</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-15.webp, img/content/thumbnails/user-15@2x.webp 2x"><img src="img/content/thumbnails/user-15.jpg" srcSet="img/content/thumbnails/user-15@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Владимир</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Обухово</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-16.webp, img/content/thumbnails/user-16@2x.webp 2x"><img src="img/content/thumbnails/user-16.jpg" srcSet="img/content/thumbnails/user-16@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Алёна</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Петроградская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#пилатес</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-17.webp, img/content/thumbnails/user-17@2x.webp 2x"><img src="img/content/thumbnails/user-17.jpg" srcSet="img/content/thumbnails/user-17@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Леонид</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Пионерская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-18.webp, img/content/thumbnails/user-18@2x.webp 2x"><img src="img/content/thumbnails/user-18.jpg" srcSet="img/content/thumbnails/user-18@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Ева</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Проспект Большевиков</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#йога</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-19.webp, img/content/thumbnails/user-19@2x.webp 2x"><img src="img/content/thumbnails/user-19.jpg" srcSet="img/content/thumbnails/user-19@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Мария</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Политехническая</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#стретчинг</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-20.webp, img/content/thumbnails/user-20@2x.webp 2x"><img src="img/content/thumbnails/user-20.jpg" srcSet="img/content/thumbnails/user-20@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Ирина</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Технологический институт II</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#аэробика</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-21.webp, img/content/thumbnails/user-21@2x.webp 2x"><img src="img/content/thumbnails/user-21.jpg" srcSet="img/content/thumbnails/user-21@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Александра</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Фрунзенская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#аэробика</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-22.webp, img/content/thumbnails/user-22@2x.webp 2x"><img src="img/content/thumbnails/user-22.jpg" srcSet="img/content/thumbnails/user-22@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Тимур</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Звенигородская</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#бокс</span></div>
                              </li>
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#силовые</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-23.webp, img/content/thumbnails/user-23@2x.webp 2x"><img src="img/content/thumbnails/user-23.jpg" srcSet="img/content/thumbnails/user-23@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Ян</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Московские ворота</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#силовые</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-07.webp, img/content/thumbnails/user-07@2x.webp 2x"><img src="img/content/thumbnails/user-07.jpg" srcSet="img/content/thumbnails/user-07@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Яна</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Крестовский остров</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#пилатес</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-coach">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-06.webp, img/content/thumbnails/user-06@2x.webp 2x"><img src="img/content/thumbnails/user-06.jpg" srcSet="img/content/thumbnails/user-06@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">Иван</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Чёрная речка</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#бег</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                    <li className="users-catalog__item">
                      <div className="thumbnail-user thumbnail-user--role-user">
                        <div className="thumbnail-user__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/user-24.webp, img/content/thumbnails/user-24@2x.webp 2x"><img src="img/content/thumbnails/user-24.jpg" srcSet="img/content/thumbnails/user-24@2x.jpg 2x" width="82" height="82" alt="">
                            </picture>
                            </div>
                            <div className="thumbnail-user__header">
                              <h3 className="thumbnail-user__name">София</h3>
                              <div className="thumbnail-user__location">
                                <svg width="14" height="16" aria-hidden="true">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                                <address className="thumbnail-user__location-address">Электросила</address>
                              </div>
                            </div>
                            <ul className="thumbnail-user__hashtags-list">
                              <li className="thumbnail-user__hashtags-item">
                                <div className="hashtag thumbnail-user__hashtag"><span>#кроссфит</span></div>
                              </li>
                            </ul>
                            <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                        </div>
                    </li>
                  </ul>
                  <div className="show-more users-catalog__show-more">
                    <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                    <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

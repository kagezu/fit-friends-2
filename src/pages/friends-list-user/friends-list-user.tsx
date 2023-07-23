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
        <section className="friends-list">
          <div className="container">
            <div className="friends-list__wrapper">
              <button className="btn-flat friends-list__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="friends-list__title-wrapper">
                <h1 className="friends-list__title">Мои друзья</h1>
                <!--<div className="custom-toggle custom-toggle--switch custom-toggle--switch-right" data-validate-type="checkbox">
                  <label>
                    <input type="checkbox" value="user-agreement-1" name="user-agreement"><span className="custom-toggle__icon">
                      <svg width="9" height="6" aria-hidden="true">
                        <use xlinkHref="#arrow-check"></use>
                      </svg></span><span className="custom-toggle__label">Только онлайн</span>
                  </label>
                </div>-->
              </div>
              <ul className="friends-list__list">
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-08.webp, img/content/thumbnails/friend-08@2x.webp 2x"><img src="img/content/thumbnails/friend-08.jpg" srcSet="img/content/thumbnails/friend-08@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Елизавета</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Петроградская</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                          <button className="thumbnail-friend__invite-button" type="button">
                            <svg width="43" height="46" aria-hidden="true" focusable="false">
                              <use xlinkHref="#icon-invite"></use>
                            </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                          </button>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку</p>
                        <div className="thumbnail-friend__button-wrapper">
                          <button className="btn btn--medium btn--dark-bg thumbnail-friend__button" type="button">Принять</button>
                          <button className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button" type="button">Отклонить</button>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-04.webp, img/content/thumbnails/friend-04@2x.webp 2x"><img src="img/content/thumbnails/friend-04.jpg" srcSet="img/content/thumbnails/friend-04@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Татьяна</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Площадь Александра Невского</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                          <button className="thumbnail-friend__invite-button" type="button">
                            <svg width="43" height="46" aria-hidden="true" focusable="false">
                              <use xlinkHref="#icon-invite"></use>
                            </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                          </button>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку</p>
                        <div className="thumbnail-friend__button-wrapper">
                          <button className="btn btn--medium btn--dark-bg thumbnail-friend__button" type="button">Принять</button>
                          <button className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button" type="button">Отклонить</button>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-07.webp, img/content/thumbnails/friend-07@2x.webp 2x"><img src="img/content/thumbnails/friend-07.jpg" srcSet="img/content/thumbnails/friend-07@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Ксения</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Проспект Просвещения</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#аэробика</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                          <button className="thumbnail-friend__invite-button is-disabled" type="button">
                            <svg width="43" height="46" aria-hidden="true" focusable="false">
                              <use xlinkHref="#icon-invite"></use>
                            </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                          </button>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку отклонён</p>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-10.webp, img/content/thumbnails/friend-10@2x.webp 2x"><img src="img/content/thumbnails/friend-10.jpg" srcSet="img/content/thumbnails/friend-10@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Ева</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Проспект Большевиков</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                          <button className="thumbnail-friend__invite-button" type="button">
                            <svg width="43" height="46" aria-hidden="true" focusable="false">
                              <use xlinkHref="#icon-invite"></use>
                            </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                          </button>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку принят</p>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-dark">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-05.webp, img/content/thumbnails/friend-05@2x.webp 2x"><img src="img/content/thumbnails/friend-05.jpg" srcSet="img/content/thumbnails/friend-05@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Станислав</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Спортивная</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#йога</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-coach">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;персональную тренировку принят</p>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-dark">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-11.webp, img/content/thumbnails/friend-11@2x.webp 2x"><img src="img/content/thumbnails/friend-11.jpg" srcSet="img/content/thumbnails/friend-11@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-offline"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Мария</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Политехническая</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                        </div>
                      </div>
                      <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-coach">
                        <p className="thumbnail-friend__request-text">Запрос на&nbsp;персональную тренировку отклонён</p>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-dark">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-12.webp, img/content/thumbnails/friend-12@2x.webp 2x"><img src="img/content/thumbnails/friend-12.jpg" srcSet="img/content/thumbnails/friend-12@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-offline"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Диана</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Невский проспект</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#пилатес</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-not-ready"><span>Не&nbsp;готов к&nbsp;тренировке</span>
                          </div>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-06.webp, img/content/thumbnails/friend-06@2x.webp 2x"><img src="img/content/thumbnails/friend-06.jpg" srcSet="img/content/thumbnails/friend-06@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Марк</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Технологический Институт</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#кроссфит</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-not-ready"><span>Не&nbsp;готов к&nbsp;тренировке</span>
                          </div>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="friends-list__item">
                  <div className="thumbnail-friend">
                    <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                      <div className="thumbnail-friend__image-status">
                        <div className="thumbnail-friend__image">
                          <picture>
                            <source type="image/webp" srcSet="img/content/thumbnails/friend-13.webp, img/content/thumbnails/friend-13@2x.webp 2x"><img src="img/content/thumbnails/friend-13.jpg" srcSet="img/content/thumbnails/friend-13@2x.jpg 2x" width="78" height="78" alt="">
                            </picture>
                              <!--<div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>-->
                            </div>
                        </div>
                        <div className="thumbnail-friend__header">
                          <h2 className="thumbnail-friend__name">Алёна</h2>
                          <div className="thumbnail-friend__location">
                            <svg width="14" height="16" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <address className="thumbnail-friend__location-address">Петроградская</address>
                          </div>
                        </div>
                        <ul className="thumbnail-friend__training-types-list">
                          <li>
                            <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                          </li>
                        </ul>
                        <div className="thumbnail-friend__activity-bar">
                          <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                          </div>
                          <button className="thumbnail-friend__invite-button" type="button">
                            <svg width="43" height="46" aria-hidden="true" focusable="false">
                              <use xlinkHref="#icon-invite"></use>
                            </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                          </button>
                        </div>
                      </div>
                    </div>
                </li>
              </ul>
              <div className="show-more friends-list__show-more">
                <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
                <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

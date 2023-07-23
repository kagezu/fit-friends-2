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
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="user-card">
                  <h1 className="visually-hidden">Карточка пользователя</h1>
                  <div className="user-card__wrapper">
                    <div className="user-card__content">
                      <div className="user-card__head">
                        <h2 className="user-card__title">Катерина</h2>
                      </div>
                      <div className="user-card__label">
                        <a href=""><svg className="user-card-coach__icon-location" width="12" height="14" aria-hidden="true">
                          <use xlinkHref="#icon-location"></use>
                        </svg><span>Невский проспект</span></a>
                      </div>
                      <div className="user-card__status"><span>Готов к тренировке</span></div>
                      <div className="user-card__text">
                        <p>Привет! Я&nbsp;Катерина и&nbsp;мне 27 лет. Обожаю спорт и&nbsp;все, что с&nbsp;ним связанно. Регулярно хожу на&nbsp;тренировки по&nbsp;кроссфиту, также занимаюсь йогой, рястяжкой и&nbsp;пилатесом.</p>
                        <p>Занимаюсь как с&nbsp;тренером индивидуально, так и&nbsp;на&nbsp;групповых занятиях. Люблю соревнования и&nbsp;челленджи, так что присоединяйтесь, давайте объединяться и&nbsp;заниматься вместе!&#41;</p>
                      </div>
                      <ul className="user-card__hashtag-list">
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#йога</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#кроссфит</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#пилатес</span></div>
                        </li>
                        <li className="user-card__hashtag-item">
                          <div className="hashtag"><span>#любитель</span></div>
                        </li>
                      </ul>
                      <button className="btn user-card__btn" type="button">Добавить в друзья</button>
                    </div>
                    <div className="user-card__gallary">
                      <ul className="user-card__gallary-list">
                        <li className="user-card__gallary-item"><img src="img/content/user-card-photo1.jpg" srcset="img/content/user-card-photo1@2x.jpg 2x" width="334" height="573" alt="photo1">
                        </li>
                        <li className="user-card__gallary-item"><img src="img/content/user-card-photo2.jpg" srcset="img/content/user-card-photo2@2x.jpg 2x" width="334" height="573" alt="photo2">
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

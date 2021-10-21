<template>
  <div id="app">
    <header>
    <div class="container-new">
        <div class="header">
            <div class="header__wrapper">
                <a href="#" class="header__logo">
                    <img src="./assets/icon/logo.svg" alt="Логотип">
                </a>
                <div class="header__search">
                    <form class="header__search-form" method="get">
                        <button class="header__search-button" type="submit">Поиск</button>
                        <input class="header__search-input" name="s" placeholder="Поиск" type="search">
                      </form>
                </div>
            </div>
            <button type="button" class="header-user">
                <div class="header-user__image">
                    <img src="./assets/icon/img_user.jpg" alt="Иконка профиля">
                </div>
                <div>
                    <div class="header-user__name">
                        Мортиджан
                    </div>
                    <div class="header-user__balance">
                        300 баллов
                    </div>
                </div>
            </button>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    </header>
    <div class="container">
        <div class="main-wrapper">
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item"><a href="#" class="menu__link">Оргсхема</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Kolesa Team</a></li>
                    <li class="menu__item"><a href="#" class="menu__link menu__link--active">Kolesa Shop</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Картина компании</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Новости</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Education</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Guidelines</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">Библиотека</a></li>
                    <li class="menu__item"><a href="#" class="menu__link">FAQ</a></li>
                </ul>
            </nav>
            <div class="mobile-menu">
                <nav>
                    <ul class="menu__list">
                        <li class="menu__item"><a href="#" class="menu__link">Оргсхема</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Kolesa Team</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Kolesa Shop</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Картина компании</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Новости</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Education</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Guidelines</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Библиотека</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">FAQ</a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-container">
                <div class="main-banner">
                    <img src="./assets/img/banner.jpg" alt="Баннер главной страницы">
                </div>
                <div class="hot-button">
                    <a class= "hot-button__point hot-button__point--green" href="#">
                        <img class="hot-button__icon" src="./assets/icon/hk_icon_1.png" alt="Иконка кнопки 1">
                        Получить баллы
                    </a>
                    <a class= "hot-button__point hot-button__point--yellow" href="#">
                        <img class="hot-button__icon" src="./assets/icon/hk_icon_2.png" alt="Иконка кнопки 1">
                        Как получить баллы
                    </a>
                    <a class= "hot-button__point hot-button__point--blue" href="#">
                        <img class="hot-button__icon" src="./assets/icon/hk_icon_3.png" alt="Иконка кнопки 1">
                        Подарить баллы
                    </a>
                </div>
                <div class="category-container">
                    <div class="category-tabs">
                        <div class="category-type">
                            <input data-key='all' class="category-type__input js__category-btn" id="tabs-radio-1" type="radio" name="tabs-radio" value="1" checked>
                            <label class="category-type__label" id="tabs-1" for="tabs-radio-1">Все товары</label>
                        </div>
                        <div class="category-type">
                            <input data-key='clothes' class="category-type__input js__category-btn" id="tabs-radio-2" type="radio" name="tabs-radio" value="2">
                            <label class="category-type__label" id="tabs-2" for="tabs-radio-2">Одежда</label>
                        </div>
                        <div class="category-type">
                            <input data-key='accessories' class="category-type__input js__category-btn" id="tabs-radio-3" type="radio" name="tabs-radio" value="3">
                            <label class="category-type__label" id="tabs-3" for="tabs-radio-3">Аксессуары</label>
                        </div>
                    </div>
                    <div class="category-list js__catalog">
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay hide">
            <div class="modal">
                <button type="button" data-close class="modal__close">
                </button>
                <div class="modal__image">
                    <div class="modal__image-main">
                        <img src="./assets/img/image_modal.jpg" alt="Картинка карточки товара">
                    </div>
                    <div class="modal__image-mini">
                        <img src="./assets/img/image_card_product.jpg" alt="Миниатюра карточки товара">
                        <img src="./assets/img/test_img.jpg" alt="Миниатюра карточки товара">
                        <img src="./assets/img/image_modal.jpg" alt="Миниатюра карточки товара" class="modal__image-mini--active">
                        <img src="./assets/img/test_img.jpg" alt="Миниатюра карточки товара">
                        <img src="./assets/img/image_modal.jpg" alt="Миниатюра карточки товара">
                    </div>
                </div>
                <div class="modal__info">
                    <div class="modal__info-title">
                        Футболка "Эволюционируй или сдохни"
                    </div>
                    <div class="modal__info-sale">
                        <div>
                            <div class="modal__info-price">
                                100 баллов
                            </div>
                            <div class="modal__info-btn">
                                Попросить 50 баллов
                            </div>
                        </div>
                        <div class="modal__info-account">
                            <div>
                                <div class="modal__info-balance">
                                    Твой баланс:
                                </div>
                                <div class="modal__info-points">
                                    50 баллов
                                </div>
                            </div>
                            <div>
                                <img src="./assets/icon/modal_icon.png" alt="Иконка модального окна">
                            </div>
                        </div>
                    </div>
                    <div class="modal__colors">
                        <div class="modal__colors-subtitle">
                            Цвета:
                        </div>
                        <div class="modal__colors-radio">
                            <div class="modal__colors-btn">
                                <input class="modal__colors-input" id="color-radio-1" type="radio" name="radio" value="1" checked>
                                <label class="modal__colors-label modal__colors-btn--blue" for="color-radio-1">Синий</label>
                            </div>
                            <div class="modal__colors-btn">
                                <input class="modal__colors-input" id="color-radio-2" type="radio" name="radio" value="2">
                                <label class="modal__colors-label modal__colors-btn--beige" id="color-2" for="color-radio-2">Бежевый</label>
                            </div>
                            <div class="modal__colors-btn">
                                <input class="modal__colors-input" id="color-radio-3" type="radio" name="radio" value="3">
                                <label class="modal__colors-label modal__colors-btn--grey" id="color-3" for="color-radio-3">Серый</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal__size">
                        <div class="modal__size-dimension">
                            Размер:
                        </div>
                        <div class="modal__size-rate">
                            <div class="modal__size-btn">
                                <input class="modal__size-input" id="size-radio-1" type="radio" name="size-radio" value="1" checked>
                                <label class="modal__size-label" for="size-radio-1">S</label>
                            </div>
                            <div class="modal__size-btn">
                                <input class="modal__size-input" id="size-radio-2" type="radio" name="size-radio" value="2">
                                <label class="modal__size-label" for="size-radio-2">M</label>
                            </div>
                            <div class="modal__size-btn">
                                <input class="modal__size-input" id="size-radio-3" type="radio" name="size-radio" value="3">
                                <label class="modal__size-label" for="size-radio-3">L</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal__details">
                        <div class="modal__details-subtitle">
                            Детали:
                        </div>
                        <div class="modal__details-descr">
                            Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%
                        </div>
                    </div>
                    <div class="modal__help">
                        <div class="modal__help-subtitle">
                            Как выбрать размер:
                        </div>
                        <div class="modal__help-descr">
                            Написать дяде Рику для уточнения.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__social">
                <div class="footer__social-text">
                    © Kolesa Group
                </div>
                <div class="footer__social-link">
                    <a class="footer__social-item" href="#"><img src="./assets/icon/Instagram.svg" alt="Иконка футер инстаграмм"></a>
                    <a class="footer__social-item" href="#"><img src="./assets/icon/YouTube.svg" alt="Иконка футер ютуб"></a>
                    <a class="footer__social-item" href="#"><img src="./assets/icon/VK.svg" alt="Иконка футер вк"></a>
                </div>
            </div>
            <div class="footer__descr">
                <div class="footer__descr-text">
                    Есть идеи что улучшить?<br>
                    Не знаешь, с кем решить проблему?
                </div>
                <button type="button" class="footer__descr-btn">
                     Написать
                </button>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'; */

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>

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
                      <div v-for="tab in tabs" :key="tab.id" class="category-type">
                          <button
                          class="category-type__btn"
                          :class="[selectedTab === tab.value && 'category-type__btn--active']"
                          @click="handleChangeTab(tab.value)"
                          >
                          {{ tab.name }}
                          </button>
                      </div>
                  </div>
                  <div class="category-list js__catalog">
                    <div
                    v-for="item in products"
                    :key="item.id"
                    @click="handleOpenModal"
                    class="product-card"
                    >
                      <div class="product-card__image">
                        <img
                        :src="require(`./assets/product-card/${item.img}`)" alt="Картинка карточки товара"
                        >
                        <span v-if="item.label" class="product-card__label">
                          New
                        </span>
                      </div>
                      <div class="product-card__descr">
                          <div class="product-card__price">
                            {{ item.price }} баллов
                          </div>
                          <h3 class="product-card__title">
                            {{ item.title }}
                          </h3>
                          <div class="product-card__subtitle">
                              Размеры S/M/L
                          </div>
                          <div class="product-card__button">
                              <button data-modal class="product-card__btn" type="button">
                                  Заказать
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="overlay" v-if="modalIsShow">
          <div class="modal" v-if="modalIsShow">
              <button type="button" data-close class="modal__close" @click="handleCloseModal">
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
export default {
  name: 'App',
  data() {
    return {
      clothes: [
        {
          id: 0,
          title: 'Классическая футболка-поло мужская',
          price: 350,
          label: false,
          img: 'clothes/классическая футболка поло мужская/1.png',
        },
        {
          id: 1,
          title: 'Флисовая худи женская',
          price: 600,
          label: true,
          img: 'clothes/худи флисовая женская/1.png',
        },
        {
          id: 2,
          title: 'Рубашка для хайкинга мужская',
          price: 500,
          label: false,
          img: 'clothes/рубашка для хайкинга мужская/1.png',
        },
        {
          id: 3,
          title: 'Спортивные шорты женские',
          price: 400,
          label: false,
          img: 'clothes/спортивные шорты женские/1.png',
        },
        {
          id: 4,
          title: 'Софтшельная куртка мужская',
          price: 750,
          label: true,
          img: 'clothes/софтшельная куртка мужская/1.png',
        },
        {
          id: 5,
          title: 'Спортивные шорты мужские',
          price: 400,
          label: false,
          img: 'clothes/спортивные шорты мужские/1.png',
        },
        {
          id: 6,
          title: 'Повседневная футболка женская',
          price: 300,
          label: false,
          img: 'clothes/футболка повседневная женская/1.png',
        },
        {
          id: 7,
          title: 'Флисовая куртка с капюшоном женская',
          price: 700,
          label: true,
          img: 'clothes/флисовая куртка с капюшоном женская/1.png',
        },
        {
          id: 8,
          title: 'Рубашка для хайкинга женская',
          price: 500,
          label: false,
          img: 'clothes/рубашка для хайкинга женская/1.png',
        },
      ],
      accessories: [
        {
          id: 9,
          title: 'Бутылка для воды',
          price: 100,
          label: false,
          img: 'acc/бутылка для воды/1.png',
        },
        {
          id: 10,
          title: 'Панама мужская',
          price: 200,
          label: false,
          img: 'acc/панама/1.png',
        },
        {
          id: 11,
          title: 'Быстросохнущее полотенце',
          price: 250,
          label: true,
          img: 'acc/полотенце/1.png',
        },
        {
          id: 12,
          title: 'Рюкзак для ноутбука',
          price: 400,
          label: true,
          img: 'acc/рюкзак для ноутбука/1.png',
        },
        {
          id: 13,
          title: 'Термокружка',
          price: 150,
          label: false,
          img: 'acc/термокружка/1.png',
        },
        {
          id: 14,
          title: 'Шляпа женская',
          price: 200,
          label: false,
          img: 'acc/шляпа/1.png',
        },
      ],
      tabs: [
        {
          id: 1,
          name: 'Все товары',
          value: 'all',
        },
        {
          id: 2,
          name: 'Одежда',
          value: 'clothes',
        },
        {
          id: 3,
          name: 'Аксессуары',
          value: 'accessories',
        },
      ],
      selectedTab: 'all',
      modalIsShow: false,
      activeProducts: [],
    };
  },
  computed: {
    products: {
      get() {
        return this.sortProducts(this.activeProducts);
      },
      set(value) {
        this.activeProducts = value;
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.products = [...this.clothes, ...this.accessories];
    });
  },
  methods: {
    sortProducts(array) {
      return array.sort((a, b) => (a.label > b.label ? -1 : 1));
    },
    handleChangeTab(tab) {
      this.selectedTab = tab;
      if (tab === 'all') {
        this.products = [...this.clothes, ...this.accessories];
      } else if (tab === 'clothes') {
        this.products = this.clothes;
      } else if (tab === 'accessories') {
        this.products = this.accessories;
      }
    },
    handleOpenModal() {
      this.modalIsShow = true;
    },
    handleCloseModal() {
      this.modalIsShow = false;
    },
  },
};
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>

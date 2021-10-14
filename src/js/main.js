import '../scss/style.scss';
import { clothes, accessories } from './product';

const makeProductCard = (title, price, img, label, id) => `<div data-id="${id}" class="product-card">
    <div class="product-card__image">
    <img src="${img}" alt="Картинка карточки товара">
    ${label ? '<span class="product-card__label">New</span>' : ''}
    </div>
    <div class="product-card__descr">
    <div class="product-card__price">
    ${price} баллов
            </div>
            <h3 class="product-card__title">
                ${title}
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
    </div>`;

function renderCards(item) {
    item.forEach((card) => {
        const {
            title, price, img, label, id,
        } = card;
        const cardHtml = makeProductCard(title, price, img, label, id);

        document.querySelector('.js__catalog').innerHTML += cardHtml;
    });
}

const compare = (a, b) => {
    if (a.label && b.label) {
        return 0;
    }

    if (b.label) {
        return 1;
    }

    return -1;
};

const allProduct = clothes.concat(accessories);

allProduct.sort(compare);

renderCards(allProduct);

const modalCloseButton = document.querySelector('[data-close]');
const modalButton = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.overlay');

modalButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('hide');
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.toggle('hide');
});

document.querySelectorAll('.js__category-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const btn = event.target;
        const categoryKey = btn.dataset.key;

        if (categoryKey === 'clothes') {
            document.querySelector('.js__catalog').innerHTML = '';
            clothes.sort(compare);
            renderCards(clothes);
        }

        if (categoryKey === 'accessories') {
            document.querySelector('.js__catalog').innerHTML = '';
            accessories.sort(compare);
            renderCards(accessories);
        }

        if (categoryKey === 'all') {
            document.querySelector('.js__catalog').innerHTML = '';
            allProduct.sort(compare);
            renderCards(allProduct);
        }
    });
});

/* function modalOpen(p) {
    p.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.classList.toggle('hide');
        });
    });
}

modalOpen(prCa, modalButton); */

/* const makeModalWindow = (title, price, img) => `<div class="overlay hide">
        <div class="modal">
            <button type="button" data-close class="modal__close">
            </button>
            <div class="modal__image">
                <div class="modal__image-main">
                    <img src="${img}" alt="Картинка карточки товара">
                </div>
                <div class="modal__image-mini">
                    <img src="/src/assets/img/image_card_product.jpg" alt="Миниатюра карточки товара">
                    <img src="/src/assets/img/test_img.jpg" alt="Миниатюра карточки товара">
                    <img src="/src/assets/img/image_modal.jpg" alt="Миниатюра карточки товара" class="modal__image-mini--active">
                    <img src="/src/assets/img/test_img.jpg" alt="Миниатюра карточки товара">
                    <img src="/src/assets/img/image_modal.jpg" alt="Миниатюра карточки товара">
                </div>
            </div>
            <div class="modal__info">
                <div class="modal__info-title">
                    ${title}
                </div>
                <div class="modal__info-sale">
                    <div>
                        <div class="modal__info-price">
                            ${price} баллов
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
                            <img src="/src/assets/icon/modal_icon.png" alt="Иконка модального окна">
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
    </div>`; */

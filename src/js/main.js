// ========== Общие переменные ==========
const popapStyleWrapp = document.querySelector('.popap-style__wrapper');
const popapPriceWrapp = document.querySelector('.popap-price__wrapper');
const popapRecordsWrapp = document.querySelector('.popap-records__wrapper');
const body = document.querySelector('body');
const popapStyle = document.querySelector('#popap-style');


// ========== Переменные для кнопки "заказать обратный звонок" ==========
const openPopUp = document.querySelector('#open-popup');
const closePopUp = document.querySelector('#popup__btn-close');
const popUp = document.querySelector('#popup');
const popupWrapper = document.querySelector('.popup__wrapper');
const lockPaddingValuePopup = window.innerWidth - popUp.offsetWidth + 'px';


// Открыть модальное окно
openPopUp.addEventListener('click', () => {
    popUp.classList.add('active');
    document.body.classList.toggle('scroll-lock');
    body.style.paddingRight = lockPaddingValuePopup;
});

// Закрыть модальное окно
function closesPopUp() {
    popUp.classList.remove('active');
    setTimeout(function () {
        document.body.classList.toggle('scroll-lock');
        body.style.paddingRight = '0px';
    }, 400);
}
closePopUp.addEventListener('click', closesPopUp);

/* Закрыть модальное окно нажатием на пустой экран, для кнопок:
    "заказать обратный звонок"
    "расчитать стоимость" */
window.onclick = function(event) {
    if (event.target == popupWrapper) {
        popUp.classList.remove('active');
        setTimeout(function(){
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = '0px';
        }, 400); 
    }

    if (event.target == popapPriceWrapp) {
        popapPrice.classList.remove('actives');
        setTimeout(function () {
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = '0px';
        }, 800);
    }

    if (event.target == popapStyleWrapp) {
        popapStyle.classList.remove('aktive');
        setTimeout(function () {
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = '0px';
        }, 800);
    }

    if (event.target == popapRecordsWrapp) {
        popapRecords.classList.remove('activess');
        setTimeout(function () {
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = '0px';
        }, 800);
    }
}


// ========== Переменные для кнопки "расчитать стоимость" ==========
const popapPriceBtns = document.querySelectorAll('#popap-price-btn');
const popapPriceBtnClose = document.querySelector('#popap-price__btn-close');
const popapPrice = document.querySelector('#popap-price');
const lockPaddingValue = window.innerWidth - popapPrice.offsetWidth + 'px';
// const popapPriceWrapp = document.querySelector('.popap-price__wrapper');


// Открыть модальное окно и поиск всех кнопок для открытия!
if (popapPriceBtns.length > 0) {
    for (let i = 0; i < popapPriceBtns.length; i++) {
        let popapPriceBtn = popapPriceBtns[i];

        popapPriceBtn.addEventListener('click', () => {
            popapPrice.classList.add('actives');
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = lockPaddingValue;
        })
    }
}

// Закрыть модальное окно
function closesPopapPrice() {
    popapPrice.classList.remove('actives');
    setTimeout(function () {
        document.body.classList.toggle('scroll-lock');
        body.style.paddingRight = '0px';
    }, 800);
}
popapPriceBtnClose.addEventListener('click', closesPopapPrice)

// Закрыть модальное окно на ESC
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('active');
        closesPopapPrice(popupActive);
    }
});


// ========== Переменные для "карусели" ==========
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider__inner');
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.slider__btn-prev');
const btnNext = document.querySelector('.slider__btn-next');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const itemWidth = (container.clientWidth) / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// Поиск всех объектов карусели
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

// Кнопка 'Next'
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

// Кнопка 'Prev'
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

// Перемещение слайдов
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

// Конечные положений для кнопок
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}
checkBtns();


// ========== Переменные для "tabo'v" ==========
const tabsTriggersItem = document.querySelectorAll('.tabs-triggers__item');
const tabsContentItem = document.querySelectorAll('.tabs-content__item');

tabsTriggersItem.forEach((item) =>
item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '')

    tabsTriggersItem.forEach(
        (child) => child.classList.remove('tabs-triggers__item_active')
    );
    tabsContentItem.forEach(
        (child) => child.classList.remove('tabs-content__item_active')
    );

    item.classList.add('tabs-triggers__item_active');
    document.getElementById(id).classList.add('tabs-content__item_active')
})
);

document.querySelector('.tabs-triggers__item').click();


// ========== Переменные для кнопки "Лупа" ==========
const tabsContentBtns = document.querySelectorAll('#tabs-content__btn');
const popapStyleBtnClose = document.querySelector('#popap-style__btn-close');
const lockPaddingValueStyle = window.innerWidth - popapStyle.offsetWidth + 'px';
// const popapStyle = document.querySelector('#popap-style');
// const popapStyleWrapp = document.querySelector('.popap-style__wrapper');


// Открыть модальное окно и поиск всех кнопок для открытия!
if (tabsContentBtns.length > 0) {
    for (let i = 0; i < tabsContentBtns.length; i++) {
        let popapStyleBtn = tabsContentBtns[i];

        popapStyleBtn.addEventListener('click', () => {
            popapStyle.classList.add('aktive');
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = lockPaddingValueStyle;
        })
    }
}

// Закрыть модальное окно
function closesPopapStyle() {
    popapStyle.classList.remove('aktive');
    setTimeout(function () {
        document.body.classList.toggle('scroll-lock');
        body.style.paddingRight = '0px';
    }, 800);
}
popapStyleBtnClose.addEventListener('click', closesPopapStyle)


// ========== Переменные для "карусели - popap-style" ==========
let positionPopapStyle = 0;
const slidesToShowPopapStyle = 1;
const slidesToScrollPopapStyle = 1;
const containerPopapStyle = document.querySelector('.popap-style__body');
const trackPopapStyle = document.querySelector('.popap-style__track');
const btnPrevPopapStyle = document.querySelector('.popap-style__btn-prev');
const btnNextPopapStyle = document.querySelector('.popap-style__btn-next');
const itemsPopapStyle = document.querySelectorAll('.popap-style__item');
const itemsCountPopapStyle = itemsPopapStyle.length;
const itemWidthPopapStyle = (containerPopapStyle.clientWidth) / slidesToShowPopapStyle;
const movePositionPopapStyle = slidesToScrollPopapStyle * itemWidthPopapStyle;

// Поиск всех объектов карусели
itemsPopapStyle.forEach((item) => {
    item.style.minWidth = `${itemWidthPopapStyle}px`;
});

// Кнопка 'Next'
btnNextPopapStyle.addEventListener('click', () => {
    const itemsLeft = itemsCountPopapStyle - (Math.abs(positionPopapStyle) + slidesToShowPopapStyle * itemWidthPopapStyle) / itemWidthPopapStyle;

    positionPopapStyle -= itemsLeft >= slidesToScrollPopapStyle ? movePositionPopapStyle : itemsLeft * itemWidthPopapStyle;

    setPositionPopapStyle();
    checkBtnsPopapStyle();
})

// Кнопка 'Prev'
btnPrevPopapStyle.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionPopapStyle) / itemWidthPopapStyle;

    positionPopapStyle += itemsLeft >= slidesToScrollPopapStyle ? movePositionPopapStyle : itemsLeft * itemWidthPopapStyle;

    setPositionPopapStyle();
    checkBtnsPopapStyle();
})

// Перемещение слайдов
const setPositionPopapStyle = () => {
    trackPopapStyle.style.transform = `translateX(${positionPopapStyle}px)`;
}

// Конечные положений для кнопок
const checkBtnsPopapStyle = () => {
    btnPrevPopapStyle.disabled = positionPopapStyle === 0;
    btnNextPopapStyle.disabled = positionPopapStyle <= -(itemsCountPopapStyle - slidesToShowPopapStyle) * itemWidthPopapStyle;
}
checkBtnsPopapStyle();


// ========== Переменные для кнопки "Плюсик" ==========
const popapRecordsBtns = document.querySelectorAll('.card__btn-plus');
const popapRecordsBtnClose = document.querySelector('#popap-records__btn-close');
const popapRecords = document.querySelector('#popap-records');
const lockPaddingValueRecords = window.innerWidth - popapRecords.offsetWidth + 'px';
const riba = document.querySelector('#foto__image');
let cloner;
// const popapRecordsWrapp = document.querySelector('.popap-records__wrapper');


// Открыть модальное окно и поиск всех кнопок для открытия!
if (popapRecordsBtns.length > 0) {
    for (let i = 0; i < popapRecordsBtns.length; i++) {
        let popapRecordsBtn = popapRecordsBtns[i];

        popapRecordsBtn.addEventListener('click', () => {
            popapRecords.classList.add('activess');
            document.body.classList.toggle('scroll-lock');
            body.style.paddingRight = lockPaddingValueRecords;
            sliderContainer.innerHTML = '';
            cloner = riba.cloneNode();
            sliderContainer.append(cloner);
        })
    }
}

// Закрыть модальное окно
function closesPopapRecords() {
    popapRecords.classList.remove('activess');
    setTimeout(function () {
        document.body.classList.toggle('scroll-lock');
        body.style.paddingRight = '0px';
    }, 800);
}
popapRecordsBtnClose.addEventListener('click', closesPopapRecords);


// ========== Переменные для слайдера "галерея" ==========
const cards = Array.from(document.querySelectorAll('.foto__card'));
const picture = Array.from(document.querySelectorAll('.foto__image'));
const sliderContainer = document.querySelector('.foto__img');
let cardindex = -1;
let pictureFull;

for (const card of cards) {
    card.addEventListener('click', (event) => {
        cardindex = cards.indexOf(card);
        pictureFull = picture[cardindex].cloneNode();
        pictureFull.style.width = '442px';
        pictureFull.style.height = '446px';
        sliderContainer.innerHTML = '';
        sliderContainer.append(pictureFull);
    })
}
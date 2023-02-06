'use strict'

const filterSubItemsContainers = document.querySelectorAll('.filter__subitems');
const filterSubItems = document.querySelectorAll('.filter__subitems li');
const filterItemsParent = document.querySelector('.filter__items');
const filterItems = document.querySelectorAll('.filter__item');
const cardsParent = document.querySelector('.cards');
const plusBtns = document.querySelectorAll('.card__plus');
const filterMob = document.querySelector('.filter__mob');
const filter = document.querySelector('.filter');

// Add class .active for active subItem
filterSubItemsContainers.forEach(container => {
    container.addEventListener('click', (e) => {
        filterSubItems.forEach(item => item.classList.remove('active'));

        e.target.classList.add('active');
    });
});

// Add class .active for active filterItem and open subItem
filterItemsParent.addEventListener('click', (e) => {
    const item = e.target.closest('.filter__item');

    if (item) {
            const subItem = filterSubItemsContainers[`${item.dataset.num}`];

            filterItems.forEach(item => item.classList.remove('active'));
            filterSubItemsContainers.forEach(item => item.classList.remove('active'));

            item.classList.add('active');
            subItem.classList.add('active');
        }
});

// Add overlay to card when hover
cardsParent.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.card');

    if (card) {
        card.classList.add('hover');
    }
});

// Remove overlay from card when mouseout
cardsParent.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.card');

    if (card) {
        card.classList.remove('hover');
    }
});

// Add class .active to card when plus btn was clicked
plusBtns.forEach((btn, i) => btn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');

    cards[i].classList.toggle('active');
}));

// Toggle class .active to filterMob when it was clicked and show filter
filterMob.addEventListener('click', () => {
    filterMob.classList.toggle('active');
    filter.classList.toggle('visible');
});
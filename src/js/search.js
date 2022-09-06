import {searchInfo} from './data';
import {checkInput} from './modal';
function search() {
    const items = document.querySelector('.search__items'),
          searchBlock = document.querySelector('.search');

    searchInfo.forEach(elem => {
        const block  = document.createElement('li');
        block.classList.add('search__item');
        block.innerHTML = 
        `
        <div class = "search__item-name">${elem.name}</div>
        <div class = "search__item-type">${elem.type}</div>
        `
        items.appendChild(block);
    });

    const input = document.querySelector('.header__form-input'),
          modal = document.querySelector('.modal'),
          modalWrapper = document.querySelector('.modal__wrapper'),
          searchBlockChilds = items.childNodes,
          popular = document.querySelector('.search__subtitle');
    input.addEventListener('focus', () => {
        if (modal.style.display == 'block') {
            modal.style.display = 'none';
            modalWrapper.classList.remove('modal_active');
            modalWrapper.classList.remove('animate__animated');
            modalWrapper.classList.remove('animate__fadeInUp');
        }
        searchBlock.style.display = "block";
        searchBlock.classList.add("animate__animated");
        searchBlock.classList.add("animate__fadeInUp");
    });
    input.addEventListener('blur', () => {
        searchBlock.style.display = "none";
        searchBlock.classList.remove("animate__animated");
        searchBlock.classList.remove("animate__fadeInUp");
    });

    input.addEventListener('input', () => {
        checkInput(input,searchBlockChilds);
        if (input.value !== '') {
            popular.style.display = 'none';
        } else {
            popular.style.display = 'block';
        }
    });
}

export default search;
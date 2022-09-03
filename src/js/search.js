import {searchInfo} from './data';
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
}

export default search;
import {information} from './data';
function scroll() {
    const asideMenuBlock = document.querySelector('.menu');
    window.addEventListener('scroll',() => {
        if (window.pageYOffset > 800) {
            asideMenuBlock.classList.add('menu_active');
        } else {
            asideMenuBlock.classList.remove('menu_active');
        }
    });
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('infoBlock');
    infoBlock.innerHTML = 
    `
    <div class="container">
        <div class="infoBlock__wrapper">
            <div class="infoBlock__info">
                <h2 class="infoBlock__title">${information.name}</h2>
                <ul class="infoBlock__items">
                    <li class="infoBlock__item">${information.address}</li>
                    <li class="infoBlock__item">Приёмная комиссия: <a href="tel:+74991812133">${information.tel}</a></li>
                </ul>
            </div>
            <button class="favorite">
                <img src="icons/like.svg" alt="icon like">
                <div class="favorite__text">В Избранное</div>
            </button>
        </div>
    </div>
    `
    document.body.appendChild(infoBlock);
    window.addEventListener('scroll',() => {
        if (window.pageYOffset > 820) {
            infoBlock.style.display = 'block';
            infoBlock.classList.remove('animate__fadeOutUp');
            infoBlock.classList.add('animate__animated');
            infoBlock.classList.add('animate__fadeInDown');
        } else {
            infoBlock.classList.remove('animate__fadeInDown');
            infoBlock.classList.add('animate__fadeOutUp');
        }
    });
}

export default scroll;
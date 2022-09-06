function carousel() {
    const images = document.querySelectorAll('.description__photo-collage img'),
          imagesMain = document.querySelector('.description__photo-main img'),
          carousel = document.querySelector('.carousel'),
          carouselBlock = document.querySelector('.carousel__block'),
          arrowRight = document.querySelector('.carousel__right'),
          arrowLeft = document.querySelector('.carousel__left');


    let index = 0;
    images.forEach(image => {
        const blockImg = document.createElement('img');
        blockImg.src = image.src;
        carouselBlock.appendChild(blockImg);
    });

    const blockImg = document.createElement('img');
    blockImg.src = imagesMain.src;
    carouselBlock.appendChild(blockImg);


    function setVisibility(i = 0) {
        carouselBlock.childNodes.forEach(item => {
            item.style.opacity = '0';
        });
        carouselBlock.childNodes[i].style.opacity = '1';
    }

    setVisibility();

    arrowRight.addEventListener('click', () => {
        if (index == carouselBlock.childNodes.length - 1) {
            index = 0;
        } else {
            index++;
        }
        setVisibility(index);
    });

    arrowLeft.addEventListener('click', () => {
        if (index == 0) {
            index = carouselBlock.childNodes.length - 1;
        } else {
            index--;
        }
        setVisibility(index);
    });

    function openCarousel() {
        carousel.style.display = 'block';
        setTimeout(function() {
            carouselBlock.style.opacity = '1';
            arrowRight.style.opacity = '1';
            arrowLeft.style.opacity = '1';
        });
    }
    function closeCarousel() {
        carousel.style.display = 'none';
        carouselBlock.style.opacity = '0';
        arrowRight.style.opacity = '0';
        arrowLeft.style.opacity = '0';
    }
    carousel.addEventListener('click', (e) => {
        if (e.target === carousel) {
            closeCarousel();
        }
    });
    images.forEach(item => {
        item.addEventListener('click', () => {
            carouselBlock.childNodes.forEach((child,i) => {
                if (child.src == item.src) {
                    index = i;
                    setVisibility(index);
                }
                openCarousel();
            });
        });
    });
    imagesMain.addEventListener('click', () => {
        index = carouselBlock.childNodes.length - 1;
        setVisibility(index);
        openCarousel();
    });
}

export default carousel;
function header() {
    const location = document.querySelector('.header__location'),
          modal = document.querySelector('.modal'),
          modalWrapper = document.querySelector('.modal__wrapper');
    
    modal.style.display = 'none';
    function toggleModal() {
        if (modal.style.display == 'none') {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
        modalWrapper.classList.toggle('modal_active');
        modalWrapper.classList.toggle('animate__animated');
        modalWrapper.classList.toggle('animate__fadeInUp');
    }   
    
    location.addEventListener('click', () =>{
        toggleModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            toggleModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape') {
            if (modal.style.display = 'none') {
                toggleModal();
            } else {
                return;
            }
        }
    });
    


    const content = document.querySelector('.header__navbar-items'),
          next = document.querySelector('.header__navbar-next'),
          prev = document.querySelector('.header__navbar-prev');
    
    function slide(mainArrow,otherArrow,value) {
            if (mainArrow.classList.contains('header__navbar_activeArrow')) {
                content.style.transform = `translateX(${value})`;
                mainArrow.classList.remove('header__navbar_activeArrow'),
                otherArrow.classList.add('header__navbar_activeArrow');
                mainArrow.style.opacity = '0';
                otherArrow.style.opacity = '1';
            } 
    }
    next.addEventListener('click', () => {
        slide(next,prev,'-243px');
    })
    prev.addEventListener('click', () => {
        slide(prev,next, '0px');
    })


    let block  = document.createElement('div');
    block.classList.add('header__popup');
    block.innerHTML = `
    <a href="#" class="header__popup-item">Высшее</a>
    <a href="#" class="header__popup-item">Среднее</a>   
    `
    const item = document.querySelector('#spec'),
          wrapper = document.querySelector('.header__navbar-wrapper');
    item.addEventListener('mouseenter', () =>{
        wrapper.style.height = '120px';
        item.append(block);
    });

    item.addEventListener('mouseleave', () => {
        block.remove();
        wrapper.style.height = 'fit-content';
    });
}

export default header;
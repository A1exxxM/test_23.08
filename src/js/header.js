function header() {
    const location = document.querySelector('.header__location'),
          modal = document.querySelector('.modal');

    location.addEventListener('click', () =>{
        modal.classList.toggle('modal_active');
        modal.classList.toggle('animate__animated');
        modal.classList.toggle('animate__fadeInUp');
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape') {
            modal.classList.remove('modal_active');
            modal.classList.remove('animate__animated');
            modal.classList.remove('animate__fadeInUp');
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
    const item = document.querySelector('#spec');
    item.addEventListener('mouseenter', () =>{
        item.append(block);
    });

    item.addEventListener('mouseleave', () => {
        block.remove();
    });
}

export default header;
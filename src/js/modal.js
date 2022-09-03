import {data} from './data';
function modal() {
    const block = document.querySelector('.modal__block-locations');
    data.forEach(element => {
        const item = document.createElement('li');
        item.classList.add('modal__block-locations_item');
        item.innerHTML = `
            ${element.location}
            <div>${element.region}</div>
        `
        block.appendChild(item);
    });



    const modalSelectedItemsWrapper = document.querySelector('.modal__block-selected_wrapper'),
          modalSelectedItems = document.querySelector('.modal__block-selected'),
          input = document.querySelector('.modal__block-input'),
          submitButton = document.querySelector('.modal__submit');
    
    const items = block.childNodes;
    items.forEach((item,i) => {
        item.addEventListener('click', () => {
            function deleteItem(block) {
                block.style.opacity = '0';
                setTimeout(function() {
                    block.remove();
                    if (modalSelectedItemsWrapper.childNodes.length == 0) {
                        modalSelectedItems.style.display = "none";
                    }
                },400);
            }
            if (modalSelectedItemsWrapper.childNodes.length !== 0) {
                for (let k = 0; k < modalSelectedItemsWrapper.childNodes.length; k++) {
                    if (modalSelectedItemsWrapper.childNodes[k].childNodes[1].textContent == data[i].location) {
                        deleteItem(modalSelectedItemsWrapper.childNodes[k]);
                        return;
                    }
                }
            } 
            const selectedBlock = document.createElement('div');
            selectedBlock.classList.add('modal__block-selected_item');
            selectedBlock.innerHTML = `
            <span>${data[i].location}</span>
            <img src="icons/close_outlined.svg" alt="#">
            `
            if (modalSelectedItemsWrapper.childNodes.length == 0) {
                modalSelectedItems.style.display = "block";
            }
            
            selectedBlock.lastElementChild.addEventListener('click', () => {
                deleteItem(selectedBlock);
            });
            modalSelectedItemsWrapper.appendChild(selectedBlock);
        });
    });



    input.addEventListener('input', () => {
        items.forEach(item => {
            if (item.textContent.toUpperCase().indexOf(input.value.toUpperCase()) == -1) {
                item.style.display = "none";
            } else {
                item.style.display = "";
            }
        });
    });
    
    const locationPath = document.querySelector('.header__location-city'),
          modal = document.querySelector('.modal');
    submitButton.addEventListener('click', () => {
        if (modalSelectedItemsWrapper.childNodes.length !== 0) {
            let str = modalSelectedItemsWrapper.childNodes[0].childNodes[1].textContent;
            for (let i = 1; i < modalSelectedItemsWrapper.childNodes.length; i++) {
                str += `,${modalSelectedItemsWrapper.childNodes[i].childNodes[1].textContent}`;
            }
            if (str.length < 20) {
                locationPath.textContent = str;
            } else {
                locationPath.textContent = str.slice(0,20) + '...';
            }
        } else {
            locationPath.textContent = "Выберите город";
        }
        modal.classList.remove('modal_active');
        modal.classList.remove('animate__animated');
        modal.classList.remove('animate__fadeInUp');
    });
}

export default modal;
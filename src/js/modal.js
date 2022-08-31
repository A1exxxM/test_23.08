import data from './data';
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
                    if (modalSelectedItemsWrapper.childNodes[k].textContent == data[i].location) {
                        deleteItem(modalSelectedItemsWrapper.childNodes[k]);
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
    

    
    
    
}

export default modal;
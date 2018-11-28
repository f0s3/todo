function addItem(e) {
    e.preventDefault();

    if (!e.target[0].value.trim()) {
        return;
    }

    let listContainer = document.querySelector("#list-container");
    let itemContainer = document.createElement('div');

    let item = document.createElement('label');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', setDone);
    
    let taskName = document.createElement('span');
    taskName.textContent = e.target[0].value;

    item.appendChild(checkbox);
    item.appendChild(taskName);

    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', removeItem);

    itemContainer.appendChild(item);
    itemContainer.appendChild(removeButton);
    listContainer.appendChild(itemContainer);
    e.target[0].value = ""
}

function setDone() {
    (this.checked) ? this.parentNode.className = 'done' : this.parentNode.className = '';
}

function removeItem() {
    this.parentNode.remove();
}

//переход с кнопки Отправить на экран Успешно создан
let createTrack = document.getElementById("create_track");
let addingTrack = document.getElementById("adding_track");
let addedSuccessTrack = document.getElementById("added_success_track");

createTrack.onsubmit = function(evt) {
    evt.preventDefault();
    addingTrack.style.display = "none";
    addedSuccessTrack.style.display = "block";
}

//добавление удаление  инпутов
let i = 0; //счётчик количества инпутов
let grouppedInputs = document.querySelectorAll(".groupped-inputs");

for (let grouppedInput of grouppedInputs) {
    grouppedInput.onclick = function(event) {
        let inputBtns = this.querySelector(".input-with-btns");
        let blockInputBtns = inputBtns.cloneNode(true);
        let inputId = this.querySelector("label").getAttribute("for");
        if (event.target.classList.contains('add-img')) {
            i = ++i;
            this.appendChild(blockInputBtns);
            this.lastChild.style.marginTop = "16px";
            let newInput = this.lastChild.querySelector("input");
            newInput.focus();
            newInput.value = "";
            namesAndIds(this, inputId);
            placeBtns(this);
        } else if (event.target.classList.contains('remove-img')) {
            i = --i;
            let inputBlock = event.target.closest('.input-with-btns');
            inputBlock.remove();
            namesAndIds(this, inputId);
            placeBtns(this);
        } else {
            return;
        }
    };
}

//перебор всех input и переименование id и name по порядку
let namesAndIds = function(fieldBlock, id) {
    let j = 0;
    let inputs = fieldBlock.querySelectorAll("input");
    for (let input of inputs) {
        input.setAttribute("id", `${id}_${j}`);
        input.setAttribute("name", `${id}_${j}-field`);
        j++;
        //console.log(input);
    }
}

//перебор всех input и добавление/удаление кнопок add/remove
//у первого инпута только кнопка Добавить, у остальных Удалить, а у последней обе кнопки
//если удалять инпуты и остаётся только один, то у него должна исчезнуть Удалить
let placeBtns = function(fieldBlock) {
    let inputBtnBlocks = fieldBlock.querySelectorAll(".input-with-btns");
    let k = 0;
    for (let block of inputBtnBlocks) {
        let removeBtn = block.querySelector(".input-btn__remove");
        let addBtn = block.querySelector(".input-btn__add");
        removeBtn.style.display = "block";
        if (inputBtnBlocks.length === 1) {
            removeBtn.style.display = "none";
            addBtn.style.display = "block";
        } else {
            if (k === 0) {
                removeBtn.style.display = "block";
                addBtn.style.display = "none";
            } else if (k === (inputBtnBlocks.length - 1)) {
                addBtn.style.display = "block";
            } else {
                addBtn.style.display = "none";
            }
        }
        k++;
    }
}
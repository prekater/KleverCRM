let mainStep1 = document.querySelector('main');

let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');
let step6 = document.getElementById('step6');
let finish = document.getElementById('finish');

let btnNextStep2 = step2.querySelector('.next');
let btnPrevStep2 = step2.querySelector('.prev');
let btnNextStep3 = step3.querySelector('.next');
let btnPrevStep3 = step3.querySelector('.prev');
let btnNextStep4 = step4.querySelector('.next');
let btnPrevStep4 = step4.querySelector('.prev');
let btnNextStep5 = step5.querySelector('.next');
let btnPrevStep5 = step5.querySelector('.prev');
let btnNextStep6 = step6.querySelector('.next');
let btnPrevStep6 = step6.querySelector('.prev');


btnPrevStep2.onclick = function() {
    step2.style.display = 'none';
    step1.style.display = 'block';
    mainStep1.style.display = 'block';
}

btnNextStep3.onclick = function() {
    step3.style.display = 'none';
    step4.style.display = 'block';
}
btnPrevStep3.onclick = function() {
    step3.style.display = 'none';
    step2.style.display = 'block';
}

btnNextStep4.onclick = function() {
    step4.style.display = 'none';
    step5.style.display = 'block';
}
btnPrevStep4.onclick = function() {
    step4.style.display = 'none';
    step3.style.display = 'block';
}

btnNextStep5.onclick = function() {
    step5.style.display = 'none';
    step6.style.display = 'block';
}
btnPrevStep5.onclick = function() {
    step5.style.display = 'none';
    step4.style.display = 'block';
}

btnPrevStep6.onclick = function() {
    step6.style.display = 'none';
    step5.style.display = 'block';
}
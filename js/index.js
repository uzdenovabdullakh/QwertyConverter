import {ConverterToRus,ConverterToEng} from './converter.js';
import {Output} from './output.js';
window.addEventListener('load', function (){

//кнопка переключения раскладки
let isEng = true;
function switcher(event){
  event.preventDefault()
  let p = document.getElementById('rask');
  if (isEng===true){
    p.innerText = "Русская раскладка";
    isEng  = false;
  }
  else if (isEng  === false){
    p.innerText = "Английская раскладка";
    isEng  = true;
  }
}

let switch_btn = this.document.querySelector(".Translate-ReverseButton");

switch_btn.addEventListener('click',switcher)

//преобразовывание
let str;
function Form(formNode) {
  let elem = formNode.elements.text_input;
  if (isEng===true){
    str = ConverterToRus(elem.value);
  }
  else if (isEng===false){
    str = ConverterToEng(elem.value);
  }
  Output(str);
}

function eventListener(event) {
    event.preventDefault()
    Form(form)
}

let form = document.querySelector(".text_form");

form.addEventListener('submit',eventListener)

//кнопка сброса
function reset(event){
  event.preventDefault()
  let input = document.getElementById('text_input');
  let out = document.getElementById('text_output');
  out.value = '';
  input.value = '';
}

let btn_reset = document.getElementById('delete-code');

btn_reset.addEventListener('click',reset);


});
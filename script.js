const SEARCH = document.querySelector('.field');
const BUTTON = document.querySelector('.button');
/*Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.
При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве*/
let objects = [{
  'name': 'Eduard',
  'age': 24
},
{
  'name': 'Alex',
  'age': 20
},
{
  'name': 'Egor',
  'age': 26
},
{
  'name': 'Ivan',
  'age': 18
}
];

BUTTON.addEventListener('mousedown', showAlert);
// 3) JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
function showAlert(event) {
  // 4)Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
  if (SEARCH.value === 'google')  {
    alert('Yandex круче. Но это не точно');
    alert(objects[0]['name']);
    /* 10) показать alert с результатом поиска не сразу,
    а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)*/
    setTimeout("alert('Yandex круче. Но это не точно')", 3000)
    return 
  }
  alert(SEARCH.value);
  alert(objects[0]['name']);
  // 10)
  setTimeout("alert(SEARCH.value)", 3000)
}

// 6) Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 
function superSum(firstNum, secondNum){
  alert(+firstNum + +secondNum)
}

superSum(1, 2)

/* 7) Создать массив из чисел в перемешку (не отсортированы). 
С помощью цикла for найти максимальный и минимальный элементы в массиве*/
let randomNumber = [2,5,7,9,4,2,4,7,99,7,1];
let maxNum = randomNumber[0];
let minNum = randomNumber[0];

for(let i = 0; i < randomNumber.length; i++){
  if (randomNumber[i] > maxNum){
    maxNum = randomNumber[i]
  }
  if (randomNumber[i] < minNum){
    minNum = randomNumber[i]
  }
}


console.log(maxNum, minNum)



// 8) Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую

let a = 11;
let b = 22;

[a, b] = [b, a]

console.log(a, b)

/* 9)Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было 
  передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)*/

function findMax(arr){
  return arr.reduce((a, b) => a > b ? a : b)
}

console.log(findMax([2,5,7,9,4,2,4,7,99,7,1,677]))


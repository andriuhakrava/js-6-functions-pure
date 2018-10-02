/* 1. Створіть функцію, що приймає в себе строку виду "42 см" і 
повертає перетворене значення в метри: "0.42 м". */

function convertString(str){
	let value = parseInt(str) / 100 + ' м';
	return value;
}

console.log(`Перетворене значення в метрах: ${convertString('42 см')}`);

/* 2. Дано: 2 або 3 строкові змінні з номером дня, місяця та року: d = 04, m = 07, y = 1996.
Створіть функцію, яка приймає 2 обов'язкових параметра d та m і необов'язковий y.
Функція повинна повернути строку з датою в одному з двох форматів: "04.07" "04.07.1996"*/

function dateMaker(d, m, y){
	let dateValue = d + '.' + m + '.' + y;
	if (y === undefined) { dateValue = d + '.' + m; }
	return dateValue;
}

console.log(`Вивід результату роботи функції у форматі day.month: ${dateMaker('04', '07')}`);
console.log(`Вивід результату роботи функції у форматі day.month.year: ${dateMaker('04', '07', '1996')}`);

/* 3. Дано кубічне рівняння (квадратичний тричлен ax2 + bx + c = 0).
Для знаходження коренів рівняння потрібно спочатку знайти дискримінант цього рівняння.
Створіть функцію розрахунку дискримінанта (формула D = b2 - 4ac). */

function discrimCalc(b, a, c){
	let d = Math.pow(b, 2) - 4 * a * c;
	return d;
}

let discriminant = discrimCalc(7, 3, 2);
console.log(`Результат обчислення дискримінанту: ${discriminant}`);

// 4. Створіть функцію, що повертає тип даних змінної Ї українською мовою.

let Ї;

function типДаних(Ї){ 

	if (Ї === undefined) { 
		return 'значення не задано'; 
	} else if (typeof(Ї) === 'string') {
		return 'строка';
	} else if (Ї === Infinity) {
		return 'безкінечність';
	} else if (typeof(Ї) === 'number') {
		return 'число';
	} else if (Ї === null) {
		return 'порожнеча';
	} else if (typeof(Ї) === 'object') {
		return "об'єкт";
	}	else if (typeof(Ї) === 'function') {
		return "функція";
	}
	
}

console.groupCollapsed('Результати виклику функції, що повертає тип даних змінної Ї українською мовою.');
console.log(типДаних());

Ї = 'Привіт';
console.log(типДаних(Ї));

Ї = 42;
console.log(типДаних(Ї));

Ї = 1 / 0;
console.log(типДаних(Ї));

Ї = null;
console.log(типДаних(Ї));

Ї = {};
console.log(типДаних(Ї));

Ї = типДаних;
console.log(типДаних(Ї));

console.groupEnd();

/* 5. Скрипт отримує "з сервера" габарити коробки та вираховує об'єм.
Виправте помилки та недоліки скрипта (функцію getFromServer не чіпайте).
Переробіть функцію calcBox, щоб вона стала чистою. */

function getFromServer(v){
  var res = Math.ceil(Math.random()*100) + ' см';
  console.info('Користувач запросив ' + v + ' розмір коробки: ' + res + '.');
  return res;
}

function calcBox(x, y, z){

  let res = 'Габарити коробки: ' + x + ' * ' + y + ' * ' + z + '.<br>';
  res += "Об'єм коробки: " + x * y * z + ' кубічних дециметрів.';
  document.getElementsByTagName('p')[0].innerHTML = res;
}

calcBox(parseInt(getFromServer('x')), parseInt(getFromServer('y')), parseInt(getFromServer('z')));
console.info('Скрипт виконано.');
	
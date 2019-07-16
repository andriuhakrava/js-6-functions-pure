# JS-6-functions-pure

## Educational tasks from Circle WebAcademy

1. Створіть функцію, що приймає в себе строку виду "42 см" і повертає перетворене значення в метри: "0.42 м".

2. Дано: 2 або 3 строкові змінні з номером дня, місяця та року: d = "04", m = "07", y = "1996". Створіть функцію, яка приймає 2 обов'язкових параметра d та m і необов'язковий y. Функція повинна повернути строку з датою в одному з двох форматів:
	```
	"04.07"
	"04.07.1996"
	```

3. Дано кубічне рівняння (квадратичний тричлен ax2 + bx + c = 0). Для знаходження коренів рівняння потрібно спочатку знайти дискримінант цього рівняння. Створіть функцію розрахунку дискримінанта (формула D = b2 - 4ac).
	```
	function diskr(){ ... }
	var a = 5, b = 4, c = 7;
	console.log(diskr(a, b, c));
	```
	І функцію обчислення коренів рівняння, яка буде використовувати функцію diskr().

4. Створіть функцію, що повертає тип даних змінної k українською мовою.
	```
	function dataType(){ ... }

	let k;
	console.log(dataType());    // "значення не задано"
	k = 'Привіт!';
	console.log(dataType());    // "строка"
	k = 42;
	console.log(dataType());    // "число"
	k = 1 / 0;
	console.log(dataType());    // "безкінечність"
	k = null;
	console.log(dataType());    // "порожнеча"
	k = {};
	console.log(dataType());    // "об'єкт"
	k = dataType;
	console.log(dataType());    // "функція"
	// і завдання з зірочкою:
	k = 1 / 'k';
	console.log(dataType());    // "не число!"
	```

5. Скрипт отримує "з сервера" габарити коробки та вираховує об'єм. Виправте помилки та недоліки скрипта (функцію getFromServer не чіпайте). Переробіть функцію calcBox, щоб вона стала чистою.
	```
	function getFromServer(v){
	  let res = Math.ceil(Math.random()*100) + ' см';
	  console.info('Користувач запросив ' + v + ' розмір коробки: ' + res + '.');
	  return res;
	}
	let x = getFromServer('x');
	let y = getFromServer('y');
	let z = getFromServer('z');
	function calcBox(){
	  let res = 'Габарити коробки: ' + x + ' * ' + y + ' * ' + z + '.<br>';
	  res += "Об'єм коробки: " + x * y * z + ' кубічних дециметрів.';
	  document.getElementsByTagName('p')[0].innerHTML = res;
	}
	calcBox();
	console.info('Скрипт виконано.');
	```
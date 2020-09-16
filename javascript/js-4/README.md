Javascript-4

Задание: Практическое задание №4

# Description
promiseReduce — работа с асинхронными функциями

Цель: Написать функцию: promiseReduce(asyncFunctions, reduce, initialValue)

asyncFunctions — массив асинхронных функций, возвращающих Promise.

reduce(memo, value) — функция, которая будет вызвана для каждого успешно завершившегося промиса.

initialValue — стартовое значение для функции reduce.

promiseReduce последовательно вызывает переданные асинхронные функции и выполняет reduce-функцию сразу при получении результата до вызова следующей асинхронной функции.

Функция promiseReduce должна возвращать Promise с конечным результатом.
Пример использования

```javascript
var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}
 
var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})
 
function promiseReduce(asyncFunctions, reduce, initialValue) {
/*
* Реализация
*/
}
 
// Тест кейс
promiseReduce(
   [fn1, fn2],
   function (memo, value) {
      console.log('reduce');
      return memo * value
   },
   1
)
.then(console.log)
 
//Вывод в консоль
//```
//fn1
//reduce
//fn2
//reduce
//2
//```
```

# How to
Создана структура из следующих файлов:

* promiseReduce.js [реализация]
* promiseReduce.test.js [файл тестов]
* testConsole.js [функция для тестирования]

Для проверки выполнить:
- npm install
- npm run test

# Note
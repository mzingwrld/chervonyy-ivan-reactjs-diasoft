Javascript-3

Задание: Практическое задание №3

# Description
getPath — поиск уникального селектора
Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
Уникальный селектор может быть использован в `document.querySelector()` и возвращать исходный элемент.
`document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.

```javascript
$0 // HTMLElement
getPath($0) // => "..."
```

# How to
Создана структура из следующих файлов:

* getPath.js
* getPath.test.js

Файлы для тестов (используются в getPath.test.js):
* test.html
* test2.html

Для проверки выполнить:
- npm install
- npm run test

# Note
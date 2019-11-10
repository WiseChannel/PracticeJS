
//Map - Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства
// new Map() - создает колекцию
// new.set(key, value) - записывает по ключу key и значение value
// new.get(key) - возращает значение по ключу, или undefined если ключ key отсутсвует
// new.has(key) - возращает true, если ключ key присутствует в колекции, иначе false
// map.delete(key) - удаляет элемент по ключу key
// map.clear() - очищает колекцию от всех элементов
// map.size - возращает текущее количество элементов в колекции

//Пример

let map = new Map();

map.set('1', 'str12');   //строчка в качестве ключа
map.set(1, 'num2');     //цифра как ключ
map.set(true, 'bool1'); //булевое значение как ключ
map.set('sisi', 'nameGirl')
// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:

console.log(map.get(true));
console.log(map.get(1));
console.log(map.size);

//Set

//Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
}



//WeakMap


//WeakSet

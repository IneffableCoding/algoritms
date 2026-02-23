/*
Преварительная задача, в решении учитывать что объектов может быть 
условно миллиард, а типов миллион, исходить из необходимости максимально снизить 
затраты по времени и ресурсам.
Написать функцию вывода строкой через запятую названий (name) объектов.
Брать только объекты связанные с типами у которых class="Устройства".

Задача: фильтрация и объединение данных из двух массивов

Что нужно сделать:

Из массива объектов выбрать только те, 
чьи типы относятся к классу "Устройства", и вернуть их названия через запятую.
*/

//Объекты
const objects = [
  { id: 1, name: "Test 1", object_type: 1 },
  { id: 2, name: "Test 2", object_type: 1 },
  { id: 3, name: "Test 3", object_type: 2 },
  { id: 4, name: "Test 4", object_type: 3 },
];

//Типы
const object_types = [
  { id: 1, class: "Устройства" },
  { id: 2, class: "Устройства" },
  { id: 3, class: "Порты" },
  { id: 4, class: "Кабели" },
];

function getNames(objects, object_types) {
  const set = new Set();
  const result = [];

  object_types.forEach((type) => {
    if (type.class === "Устройства") set.add(type.id);
  });

  console.log(set);
  // 1 2

  objects.forEach((obj) => {
    if (set.has(obj.object_type)) {
      // Проверь, есть ли ID типа этого объекта в нашем Set
      result.push(obj.name);
    }
  });

  return result.join(", ");
  // join собирает массив в строку через разделитель
}

console.log(getNames(objects, object_types));
// Test 1, Test 2, Test 3

/*
has, add - методы структуры данных Set

forEach - метод перебора массива, не мутирует, проходится по каждому элементу, возвращает undefined
*/

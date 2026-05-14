/*
Имеется исходный массив плоских данных

Необходимо преобразовать его в структуру,
где данные будут сгруппированы по одному из полей (кроме id)

Внутри сформированной группы должен лежать объект,
ключами в которого должно стать поле (к примеру id)

Значением должен быть объект из исходного массива с
соответствующем полем id, не включая само поле id
*/

const data = [
  { id: 1, age: 20, name: "Иван", country: "Russia" },
  { id: 2, age: 20, name: "Дмитрий", country: "USA" },
  { id: 3, age: 20, name: "Алексей", country: "Russia" },
  { id: 4, age: 20, name: "Александр", country: "USA" },
  { id: 5, age: 20, name: "Иван", country: "Russia" },
];

const result = {
  Russia: {
    1: { age: 20, name: "Иван", country: "Russia" },
    3: { age: 20, name: "Алексей", country: "Russia" },
    5: { age: 20, name: "Иван", country: "Russia" },
  },
  USA: {
    2: { age: 20, name: "Дмитрий", country: "USA" },
    4: { age: 20, name: "Александр", country: "USA" },
  },
};

const groupCountries = (data) => {
  const result = {};

  data.forEach((item) => {
    const { age, name, country, id } = item;
    const itemWithoutId = { age, name, country };

    if (result[country]) {
      result[country][id] = itemWithoutId;
    } else {
      result[country] = { [id]: itemWithoutId };
    }
  });

  return result;
};

console.log(groupCountries(data));

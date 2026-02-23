// Дана входная строка s, необходимо поменять местами слова.

// Слово определяется как последовательность непробельных символов.
// Слова в будут разделены как минимум одним пробелом.s

// Возвращает строку слов в обратном порядке, соединенных одним пробелом.

// Обратите внимание, что s может содержать начальные или конечные пробелы
// или несколько пробелов между двумя словами.Возвращаемая строка должна
// содержать только один пробел, разделяющий слова.Не включайте никаких
// дополнительных пробелов.

// Input: s = "the sky is blue"
// Output: "blue is sky the"

const reverseWords = function (s) {
    console.log(s.split(' '))
    let words = s.split(' ').filter(word => word !== "");
    let left = 0;
    let right = words.length - 1;

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    return words.join(' ');
};

console.log(reverseWords("  hello world  ")) // "world hello"

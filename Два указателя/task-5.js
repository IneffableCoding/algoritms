// Фраза является палиндромом, если после преобразования всех заглавных букв в
// строчные и удаления всех небуквенно - цифровых символов она читается одинаково
// и слева направо, и справа налево.Буквенно - цифровые символы включают буквы и
// цифры.

// Если задана строка s, вернуть значение true, является ли она палиндромом,
// или falseв противном случае.

let s = "A man, a plan, a canal: Panama"; // true

// С регуляркой
const isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// С юникодом 97-122 строчные буквы, 48-57 цифры
// s = s.toLowerCase()
// let onlyLetters = ''

// for (let i = 0; i < s.length; i++) {
//     let code = s.charCodeAt(i)
//     if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
//         onlyLetters = onlyLetters + s[i]
//     }
// }
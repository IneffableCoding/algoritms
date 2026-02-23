// Вам даны два отсортированных массива.
// Объедините эти два массива в один отсортированный массив.
// Отсортированный массив должен быть составлен путем сращивания.
// Верните отсортированный массив.
// Нельзя использовать метод sort()

function mergeArrs (arr1, arr2) {
    const result = []
    let i = 0
    let j = 0
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
        
    }
    
    return result.concat(arr1.splice(i), arr2.splice(j))
}
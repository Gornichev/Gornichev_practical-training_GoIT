// 1 Поліндром

const isPalindrome = (string) => {
    return string === string.split("").reverse().join("")
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("'Madam i'm Adam'"))
console.log(isPalindrome("abb23"))
console.log(isPalindrome("11111113"))
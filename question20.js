let passWord = 'abc123!'
let length = passWord.length
if (length < 4){
    passWord = 'weak'
} else {
    passWord = 'strong'
}

if (length <= 7) {
    passWord = 'medium'
} else {
    passWord ='weak'
}

console.log(passWord)

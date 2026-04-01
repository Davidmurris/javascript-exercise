let passWord = 12345;
passWord.length

if (passWord.length < 6){
    passWord = 'too short';
}
else {
    passWord = 'valid'
}

console.log(passWord)
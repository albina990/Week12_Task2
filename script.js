function deleteTags(str) {
    let regExp = /(\>|\<(\/?[^>]+)?\>|\<)/ig;
    let newStr = str.replace(regExp, '');
    return newStr;
};

console.log(deleteTags(str));


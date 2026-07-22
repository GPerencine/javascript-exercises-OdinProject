const reverseString = function(str) {
    // gabarito: return string.split("").reverse().join("");
    let splited = str.split("");
    let reversed = "";
    for (let i = splited.length - 1; i >= 0; i--){
        reversed += splited[i];
    }
    
    return reversed;
};


// Do not edit below this line
module.exports = reverseString;

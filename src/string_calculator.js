// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

	let value = 0;
    let string_arr = string_numbers.split(',');

    string_arr.forEach(char => {
        if(char == '3'){
            value += 2;
        }
        if(char == '5'){
            value = value + 4;
        }
    });

    return value;
};

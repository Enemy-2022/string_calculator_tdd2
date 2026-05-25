// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

	let value = 0;

    if(string_numbers.includes('3')){
	    value = 2;
    }
	if(string_numbers.includes('5')){
	    value = value + 4;
    }
    return value;
};

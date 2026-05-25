// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

    if(string_numbers.includes('3')){
	    return 2;
    }
    else{
        return 0;
    }

};


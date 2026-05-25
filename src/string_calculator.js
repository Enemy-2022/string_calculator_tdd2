// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	
	let result = 0;
	let delimter = ",";

	if(string_numbers.includes (delimter))
	{
		let numbers = string_numbers.split(delimter);
		numbers.forEach(number =>
		{
			if(isNaN(number))
			{
				number=0;
			}
			result =result + parseInt(number);
		})
	}
	else if(string_numbers.length > 0)
	{
		result = parseInt(string_numbers);
	}
	return result;
};


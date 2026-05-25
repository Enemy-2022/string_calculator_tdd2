describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for [1]', function() {
		expect(calculator.add('1')).toEqual(0);
	});
	it('should return 2 for [1, 2, 3]', function() {
		expect(calculator.add('1,2,3')).toEqual(2);
	});
	it('should return 6 for [1, 2, 3, 4, 5]', function() {
		expect(calculator.add('1,2,3,4,5')).toEqual(6);
	});
	it('should return 12 for [ 3, 5, 3, 5, 4, 2 ]', function() {
		expect(calculator.add('3,5,3,5,4,2')).toEqual(12);
	});

});


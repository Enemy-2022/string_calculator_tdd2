describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return a single number directly as result', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should add 1,2 and return 3', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('should add 1,27 and return 28', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should add 15,17, 21 and return 53', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});
	it('should add 1,5,27, 45 and return 78', function() {
		expect(calculator.add('1,5,27,45')).toEqual(78);
	});
	it('should add 1, 10, 100, 1000, 10000 and return 11111', function() {
		expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});

});


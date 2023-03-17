import add from "../utils/add";

const context = describe;

describe('add', () => {
	context('with no argument', () => {
		it('returns zero', () => {
			expect(add()).toBe(0);
		});
	});

	context('with only one number', () => {
		it('returns the same number', () => {
			expect(add(1)).toBe(1);
		});
	});

	context('with two numbers', () => {
		it('returns sum of two numbers', () => {
			expect(add(1, 2)).toBe(3);
		});
	});

	context('with three numbers', () => {
		it('returns sum of three numbers', () => {
			expect(add(1, 2, 3)).toBe(6);
		});
	});
});
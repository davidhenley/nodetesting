const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  it('should add two numbers', () => {
    expect(utils.add(33, 11)).toBeA('number').toBe(44);
  });

  it('should return square root of a number', () => {
    expect(utils.square(5)).toBeA('number').toBe(25);
  });

  it('should verify first and last name are set', () => {
    const user = { age: 32, location: 'Nashville' };
    const res = utils.setName(user, 'David Henley');
    expect(res).toInclude({ firstName: 'David', lastName: 'Henley'});
  });
});

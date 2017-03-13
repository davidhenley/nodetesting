const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  it('should add two numbers', () => {
    expect(utils.add(33, 11)).toBe(44);
  });

  it('should return square root of a number', () => {
    expect(utils.square(5)).toBe(25);
  });

  it('should verify first and last name are set', () => {
    const user = { age: 32, location: 'Nashville' };
    const res = utils.setName(user, 'David Henley');
    expect(res).toInclude({ firstName: 'David', lastName: 'Henley'});
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7);
      done();
    });
  });

  it ('should async square two numbers', (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25);
      done();
    });
  });
});

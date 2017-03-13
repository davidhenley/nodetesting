const utils = require('./utils');

describe('Utils', () => {

  it('should add two numbers', () => {
    const res = utils.add(33, 11);
    if (res !== 44) throw new Error(`Expected 44, but got ${res}.`);
  });

  it('should return square root of a number', () => {
    const res = utils.square(5);
    if (res !== 25) throw new Error(`Expected 25, but got ${res}.`);
  });

});

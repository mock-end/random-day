var expect = require('chai').expect;

describe('random-day: ', function () {

  var randomDay = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomDay()).to.be.within(1, 31);

      expect(randomDay({ min: 10 })).to.be.within(10, 31);
      expect(randomDay({ max: 10 })).to.be.within(1, 10);

      expect(randomDay({ month: 3 })).to.be.within(1, 31);
      expect(randomDay({ year: 2105 })).to.be.within(1, 31);

      expect(randomDay({ year: 2016, month: 2, min: 10 })).to.be.within(10, 29);
      expect(randomDay({ year: 2015, month: 2, min: 10 })).to.be.within(10, 28);
    }
  });
});

import chai from 'chai';
import t from '../dist/t.min.js';

chai.expect();

const expect = chai.expect;

const string = 'Hello, {{who}}!';

describe('t(string, object)', function () {
  it('should return the correct value', () => {
    expect(t('Hello, {{who}}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
});

describe('Param string', function () {
  it('should be unchanged', () => {
    t(string, { who: 'world' });
    expect(string).to.be.equal('Hello, {{who}}!');
  });
});

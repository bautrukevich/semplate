import chai from 'chai';
import t from '../dist/t.min.js';

chai.expect();

const expect = chai.expect;

const string = 'Hello, {{who}}!';

describe('Template function t(string, object)', function () {
  it('should return the correct value', () => {
    expect(t('Hello, {{who}}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when string in UPPERCASE', () => {
    expect(t('Hello, {{ WHO }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have spaces', () => {
    expect(t('Hello, {{ who }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have space at left', () => {
    expect(t('Hello, {{ who}}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have space at right', () => {
    expect(t('Hello, {{who }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when object is empty', () => {
    expect(t('Hello, {{who}}!', {})).to.be.equal('Hello, !');
  });
  it('should return the correct value when object doesn\'t have property', () => {
    expect(t('Hello, {{who}}!', { what: 'world' }, false)).to.be.equal('Hello, !');
  });
  it('param string shouldn\'t be changed', () => {
    t(string, { who: 'world' });
    expect(string).to.be.equal('Hello, {{who}}!');
  });
});

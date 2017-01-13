import chai from 'chai';
import semplate from '../src/semplate';

chai.expect();

const expect = chai.expect;
const string = 'Hello, {{who}}!';

describe('Template function semplate(string, object)', function () {
  it('should return the correct value', () => {
    expect(semplate('Hello, {{who}}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when string in UPPERCASE', () => {
    expect(semplate('Hello, {{ WHO }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have @', () => {
    expect(semplate('Hello, {{ @who }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have spaces', () => {
    expect(semplate('Hello, {{ who }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have space at left', () => {
    expect(semplate('Hello, {{ who}}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when have space at right', () => {
    expect(semplate('Hello, {{who }}!', { who: 'world' })).to.be.equal('Hello, world!');
  });
  it('should return the correct value when object is empty', () => {
    expect(semplate('Hello, {{who}}!', {})).to.be.equal('Hello, !');
  });
  it('should return the correct value when object doesn\'t have property', () => {
    expect(semplate('Hello, {{who}}!', { what: 'world' }, true, false)).to.be.equal('Hello, !');
  });
  it('should return the correct value value when object doesn\'t have property and when have @', () => {
    expect(semplate('Hello, {{ @who }}!', { what: 'world' }, true, false)).to.be.equal('Hello, !');
  });
  it('should return the correct value value when object doesn\'t have property and remove ===' +
    ' true', () => {
    expect(semplate('Hello, {{ @who }}!', { what: 'world' }, false, false)).to.be.equal('Hello, {{ @who }}!');
  });
  it('param string shouldn\'t be changed', () => {
    semplate(string, { who: 'world' });
    expect(string).to.be.equal('Hello, {{who}}!');
  });
});

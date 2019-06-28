import semplate from '../src/index'

describe('Template function semplate(string, object)', function () {
  it('should return the correct value', () => {
    expect(semplate('Hello, {{who}}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when string in UPPERCASE', () => {
    expect(semplate('Hello, {{ WHO }}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when have @', () => {
    expect(semplate('Hello, {{ @who }}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when have spaces', () => {
    expect(semplate('Hello, {{ who }}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when have space at left', () => {
    expect(semplate('Hello, {{ who}}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when have space at right', () => {
    expect(semplate('Hello, {{who }}!', { who: 'world' })).toBe('Hello, world!')
  })
  it('should return the correct value when object is empty', () => {
    expect(semplate('Hello, {{who}}!', {})).toBe('Hello, !')
  })
  it('should throw exception if property not found in string', () => {
  })
})

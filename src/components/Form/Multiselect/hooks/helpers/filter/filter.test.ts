import { defaultFilterFn } from './index'; // Adjust the import path as necessary

describe('defaultFilterFn', () => {
  it('returns true for exact match ignoring case', () => {
    expect(defaultFilterFn('apple', { label: 'Apple', value: '' })).toBeTruthy();
  });

  it('returns true for match at the start of the label', () => {
    expect(defaultFilterFn('app', { label: 'Apple Pie', value: '' })).toBeTruthy();
  });

  it('returns true for a match not at the start but after a non-letter', () => {
    expect(defaultFilterFn('pie', { label: 'Apple Pie', value: '' })).toBeTruthy();
    expect(defaultFilterFn('pie', { label: 'Apple-Pie', value: '' })).toBeTruthy();
  });

  it('returns false for a match preceded by a letter', () => {
    expect(defaultFilterFn('pple', { label: 'Apple', value: '' })).toBeFalsy();
  });

  it('handles empty search query correctly', () => {
    expect(defaultFilterFn('', { label: 'Banana', value: '' })).toBeTruthy();
  });

  it('is case insensitive', () => {
    expect(defaultFilterFn('APPLE', { label: 'apple', value: '' })).toBeTruthy();
  });

  it('returns false for non-matching labels', () => {
    expect(defaultFilterFn('orange', { label: 'Banana', value: '' })).toBeFalsy();
  });

  it('handles special characters in search query', () => {
    expect(defaultFilterFn('côté', { label: 'Délicieux côté', value: '' })).toBeTruthy();
  });

  it('returns true when search query matches at the start, even with spaces', () => {
    expect(defaultFilterFn('  apple', { label: '  Apple', value: '' })).toBeTruthy();
  });

  it('returns false when the search query is only a part of a word without preceding space or punctuation', () => {
    expect(defaultFilterFn('anana', { label: 'Banana', value: '' })).toBeFalsy();
  });

  it('returns true when the search query matches exactly except for leading or trailing spaces', () => {
    expect(defaultFilterFn(' apple ', { label: 'Apple', value: '' })).toBeTruthy();
  });

  it('considers non-letter characters as valid separators', () => {
    expect(defaultFilterFn('100', { label: 'Product 100', value: '' })).toBeTruthy();
  });
});

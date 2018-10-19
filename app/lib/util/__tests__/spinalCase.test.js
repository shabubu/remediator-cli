import spinalCase from 'app/lib/util/spinalCase';

describe('app/lib/util/spinalCase', () => {
  test('should convert camel case to spinal case', () => {
    const input = 'camelCaseString';
    const expected = 'camel-case-string';
    const result = spinalCase(input);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should not convert a non camel case string', () => {
    const input = 'snake_case';
    const expected = input;
    const result = spinalCase(input);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});

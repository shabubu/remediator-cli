import {
  DEFAULT_VERBOSITY,
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_KEY,
  VERBOSITY_NONE,
} from 'app/constants';
import determineVerbosity from 'app/lib/config/determineVerbosity';

describe('app/lib/config/determineVerbosity', () => {
  test('should return "all" when no verbosity provided', () => {
    const config = {};
    const expected = DEFAULT_VERBOSITY;
    const result = determineVerbosity(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return none when NONE provided', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_NONE.toUpperCase(),
    };
    const expected = VERBOSITY_NONE;
    const result = determineVerbosity(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return all when ALL provided', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ALL.toUpperCase(),
    };
    const expected = VERBOSITY_ALL;
    const result = determineVerbosity(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return error when ERROR provided', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ERROR.toUpperCase(),
    };
    const expected = VERBOSITY_ERROR;
    const result = determineVerbosity(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});

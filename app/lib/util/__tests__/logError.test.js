import {
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_KEY,
  VERBOSITY_NONE,
} from 'app/constants';

global.console = {
  error: jest.fn(),
};
const logError = require('app/lib/util/logError').default;

describe('app/lib/util/logError', () => {
  const message = 'test error';

  test('should not error when to console with "none" verbosity', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_NONE,
    };

    logError(message, config);

    expect.assertions(1);
    expect(console.error).not.toHaveBeenCalled();
  });

  test('should error when to console with "all" verbosity', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ALL,
    };

    logError(message, config);

    expect.assertions(1);
    expect(console.error).toBeCalledWith(message);
  });

  test('should error when to console with "error" verbosity', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ERROR,
    };

    logError(message, config);

    expect.assertions(1);
    expect(console.error).toBeCalledWith(message);
  });
});

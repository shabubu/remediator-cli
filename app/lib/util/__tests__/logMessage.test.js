/* eslint-disable no-console */
import {
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_KEY,
} from 'app/constants';

global.console = {
  log: jest.fn(),
};
const logMessage = require('app/lib/util/logMessage').default;

describe('app/lib/util/logMessage', () => {
  const message = 'test message';

  test('should not log message to console with anything besides "all" verbosity', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ERROR,
    };

    logMessage(message, config);

    expect.assertions(1);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('should log message to console with "all" verbosity', () => {
    const config = {
      [VERBOSITY_KEY]: VERBOSITY_ALL,
    };

    logMessage(message, config);

    expect.assertions(1);
    expect(console.log).toBeCalledWith(message);
  });
});

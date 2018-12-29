/* eslint-disable global-require */
import {
  BATCH_SIZE_KEY,
  BATCH_SIZE_SHORT_ARG,
  FORMAT_KEY,
  FORMAT_SHORT_ARG,
  MODE_CHOICE,
  MODE_COPY,
  MODE_KEY,
  MODE_SHORT_ARG,
  OUTPUT_DIRECTORY_KEY,
  OUTPUT_DIRECTORY_SHORT_ARG,
  RECURSIVE_KEY,
  RECURSIVE_SHORT_ARG,
  SKIP_ERRORS_KEY,
  SKIP_ERRORS_SHORT_ARG,
  SOURCE_DIRECTORIES_KEY,
  SOURCE_DIRECTORIES_SHORT_ARG,
  VERBOSITY_ALL,
  VERBOSITY_KEY,
  VERBOSITY_SHORT_ARG,
} from 'app/constants';
import {
  logError,
  logMessage,
} from 'app/lib/util';

// mock logging to avoid actual console calls during test.
jest.mock('app/lib/util/logMessage');
jest.mock('app/lib/util/logError');

// variables for process args and expected config
const batchSize = '2';
const formatString = ':foo:';
const outDirectory = './foo';
const sourceDirectory = './bar';
const invalidSourceDirectory = './invalid_source';

// equivalent to running `remediator -b 2 -f ":foo:" -m "copy" -o "./foo" -v "all" -r -e`
const baseArgv = [
  process.argv[0],
  process.argv[1],
  BATCH_SIZE_SHORT_ARG,
  batchSize,
  FORMAT_SHORT_ARG,
  formatString,
  MODE_SHORT_ARG,
  MODE_COPY,
  OUTPUT_DIRECTORY_SHORT_ARG,
  outDirectory,
  VERBOSITY_SHORT_ARG,
  VERBOSITY_ALL,
  RECURSIVE_SHORT_ARG,
  SKIP_ERRORS_SHORT_ARG,
  SOURCE_DIRECTORIES_SHORT_ARG,
  sourceDirectory,
];

const baseExpectedAppConfig = {
  [BATCH_SIZE_KEY]: batchSize,
  [FORMAT_KEY]: formatString,
  [MODE_KEY]: MODE_COPY,
  [OUTPUT_DIRECTORY_KEY]: outDirectory,
  [SOURCE_DIRECTORIES_KEY]: [sourceDirectory],
  [VERBOSITY_KEY]: VERBOSITY_ALL,
  [RECURSIVE_KEY]: true,
  [SKIP_ERRORS_KEY]: true,
};

process.argv = baseArgv;

describe('Remediator-Cli integration tests', () => {
  test('should log message with choice of mode and successfully output remediator results to cli', async () => {
    await require('app/index').default();

    expect.assertions(3);
    expect(logMessage).toBeCalledWith(
      MODE_CHOICE(MODE_COPY),
      baseExpectedAppConfig,
    );
    expect(logMessage).toBeCalledWith(
      '/source/test.jpg ==> /output/test.jpg',
      baseExpectedAppConfig,
    );
    expect(logMessage).toBeCalledWith(
      '/source/test2.jpg ==> Mock Error',
      baseExpectedAppConfig,
    );
  });

  test('should log error when remediator rejects', async () => {
    process.argv = [
      ...baseArgv,
      SOURCE_DIRECTORIES_SHORT_ARG,
      invalidSourceDirectory,
    ];

    await require('app/index').default();

    expect.assertions(1);
    expect(logError).toBeCalledWith(
      'Remediator Mock Error',
      expect.any(Object),
    );
  });
});

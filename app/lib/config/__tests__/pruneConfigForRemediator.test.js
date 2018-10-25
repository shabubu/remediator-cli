import {
  BATCH_SIZE_KEY,
  FORMAT_KEY,
  MODE_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
  VERBOSITY_KEY,
} from 'app/constants';
import pruneConfigForRemediator from 'app/lib/config/pruneConfigForRemediator';

describe('app/lib/config/pruneConfigForRemediator', () => {
  test('should return remediator config without cli config or undefined keys', () => {
    const remediatorCliConfig = {
      [BATCH_SIZE_KEY]: '2',
      [FORMAT_KEY]: ':foo:',
      [MODE_KEY]: 'copy',
      [OUTPUT_DIRECTORY_KEY]: './foo',
      [RECURSIVE_KEY]: undefined,
      [SKIP_ERRORS_KEY]: false,
      [SOURCE_DIRECTORIES_KEY]: [
        './bar',
        './foobar',
      ],
      [VERBOSITY_KEY]: true,
    };
    const result = pruneConfigForRemediator(remediatorCliConfig);

    expect.assertions(1);
    expect(result).toMatchSnapshot();
  });
});

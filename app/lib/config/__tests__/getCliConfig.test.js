import {
  BATCH_SIZE_SHORT_ARG,
  FORMAT_SHORT_ARG,
  MODE_SHORT_ARG,
  OUTPUT_DIRECTORY_SHORT_ARG,
  RECURSIVE_SHORT_ARG,
  SKIP_ERRORS_SHORT_ARG,
  SOURCE_DIRECTORIES_SHORT_ARG,
} from 'app/constants';
import getCliConfig from 'app/lib/config/getCliConfig';


// equivalent to running `remediator -b 2 -f ":foo:" -m "copy" -o "./foo" -r -e -s "./bar"`
process.argv = [
  process.argv[0],
  process.argv[1],
  BATCH_SIZE_SHORT_ARG,
  '2',
  FORMAT_SHORT_ARG,
  ':foo:',
  MODE_SHORT_ARG,
  'copy',
  OUTPUT_DIRECTORY_SHORT_ARG,
  './foo',
  RECURSIVE_SHORT_ARG,
  SKIP_ERRORS_SHORT_ARG,
  SOURCE_DIRECTORIES_SHORT_ARG,
  './bar',
  SOURCE_DIRECTORIES_SHORT_ARG,
  './foobar',
];

describe('app/lib/config/getCliConfig', () => {
  test('should return config when all args provided', () => {
    const result = getCliConfig();

    expect.assertions(1);
    expect(result).toMatchSnapshot();
  });
});

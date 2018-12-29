import {
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'app/constants';
import { constants } from 'remediator';

export { constants };

/**
 * Mock of remediator library.
 */
export default function remediatorMock(config) {
  let promiseResult;

  // if missing output, source, or exiftool reject
  if (
    !config[SOURCE_DIRECTORIES_KEY]
    || config[SOURCE_DIRECTORIES_KEY].indexOf('./invalid_source') !== -1
  ) {
    promiseResult = Promise.reject(new Error('Remediator Mock Error'));
  } else {
    // Resolve a successful file and a error file
    promiseResult = Promise.resolve([
      {
        [RETURN_DATA_SOURCE_KEY]: '/source/test.jpg',
        [RETURN_DATA_OUTPUT_KEY]: '/output/test.jpg',
      },
      {
        [RETURN_DATA_SOURCE_KEY]: '/source/test2.jpg',
        [RETURN_DATA_ERROR_KEY]: 'Mock Error',
      },
    ]);
  }

  return promiseResult;
}

import {
  EXIFTOOL_KEY,
  MODE_CHOICE,
  MODE_KEY,
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
} from 'app/constants';
import {
  logError,
  logMessage,
} from 'app/lib/util';
import { exiftool } from 'exiftool-vendored';
import remediator from 'remediator';
import {
  getCliConfig,
  pruneConfigForRemediator,
} from 'app/lib/config';

/**
 * Application entry function.
 */
export default async function remediatorCli() {
  const appConfig = getCliConfig();
  const remediatorConfig = {
    ...pruneConfigForRemediator(appConfig),
    [EXIFTOOL_KEY]: exiftool,
  };

  // display chosen mode
  logMessage(
    MODE_CHOICE(remediatorConfig[MODE_KEY]),
    appConfig,
  );

  try {
    const results = await remediator(remediatorConfig);

    results.forEach((result) => {
      const input = result[RETURN_DATA_SOURCE_KEY];
      const output = result[RETURN_DATA_ERROR_KEY] || result[RETURN_DATA_OUTPUT_KEY];

      logMessage(
        `${input} ==> ${output}`,
        appConfig,
      );
    });
  } catch (error) {
    logError(
      error.message,
      appConfig,
    );
  }
}

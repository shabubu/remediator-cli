import {
  MODE_COPY,
  MODE_DRY,
  MODE_MOVE,
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_NONE,
} from 'app/constants/config';

/**
 * Help description for batch size.
 * @type {string}
 */
export const BATCH_SIZE_DESCRIPTION = 'amount of files to process asynchronously at a time';

/**
 * Help description for format.
 * @type {string}
 */
export const FORMAT_DESCRIPTION = 'template markup to use when building new file names';

/**
 * Mode output to cli string.
 * @param   {string} mode Mode from config.
 * @returns {string}
 */
export const MODE_CHOICE = mode => `Mode: ${mode}`;

/**
 * Help description for mode.
 * @type {string}
 */
export const MODE_DESCRIPTION = `may run in one of three different modes: ${MODE_DRY}, ${MODE_COPY}, or ${MODE_MOVE}`;

/**
 * Help description for output directory.
 * @type {string}
 */
export const OUTPUT_DIRECTORY_DESCRIPTION = 'base output directory for transformed files';

/**
 * Help description for recursive.
 * @type {string}
 */
export const RECURSIVE_DESCRIPTION = 'enable recursively fetch all files from subdirectories of source directories';

/**
 * Help description for skip errors.
 * @type {string}
 */
export const SKIP_ERRORS_DESCRIPTION = 'enable skipping errors will continue processing all files even if errors are encountered';

/**
 * Help description for source directory.
 * @type {string}
 */
export const SOURCE_DIRECTORIES_DESCRIPTION = 'directory(s) to get files to transform from';

/**
 * Help description for verbosity.
 * @type {string}
 */
export const VERBOSITY_DESCRIPTION = `may run in one of three different verbosity levels: ${VERBOSITY_ALL}, ${VERBOSITY_ERROR}, or ${VERBOSITY_NONE}`;

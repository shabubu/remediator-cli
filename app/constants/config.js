import { constants } from 'remediator';

const {
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  DEFAULT_FORMAT,
  DEFAULT_MODE,
  DEFAULT_RECURSIVE,
  DEFAULT_SKIP_ERRORS,
  FORMAT_KEY,
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  MODE_MOVE,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
} = constants;

/**
 * Re-exporting remediator constants that remediator-cli cares about.
 */
export {
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  DEFAULT_FORMAT,
  DEFAULT_MODE,
  DEFAULT_RECURSIVE,
  DEFAULT_SKIP_ERRORS,
  FORMAT_KEY,
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  MODE_MOVE,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
};

/**
 * Default config value for output directory for Remediator CLI.
 * @type {string}
 */
export const DEFAULT_OUTPUT_DIRECTORY = './';

/**
 * Default config value for source directories for Remediator CLI.
 * @type {Array}
 */
export const DEFAULT_SOURCES_DIRECTORY = ['./'];

/**
 * Default config value for Remediator CLI verbosity.
 * @type {boolean}
 */
export const DEFAULT_VERBOSITY = false;

/**
 * Config key for verbosity for Remediator CLI.
 * @type {string}
 */
export const VERBOSITY_KEY = 'verbose';

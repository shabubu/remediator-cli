import {
  BATCH_SIZE_KEY,
  FORMAT_KEY,
  MODE_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
  VERBOSITY_KEY,
} from 'app/constants/config';
import spinalCase from 'app/lib/util/spinalCase';

/**
 * Shorthand arg for format.
 * @type {string}
 */
export const FORMAT_SHORT_ARG = '-f';

/**
 * Commander argument string for format option.
 * @type {string}
 */
export const FORMAT_ARGS = `${FORMAT_SHORT_ARG}, --${spinalCase(FORMAT_KEY)} [format template]`;

/**
 * Shorthand arg for batch size.
 * @type {string}
 */
export const BATCH_SIZE_SHORT_ARG = '-b';

/**
 * Commander argument string for batch size option.
 * @type {string}
 */
export const BATCH_SIZE_ARGS = `${BATCH_SIZE_SHORT_ARG}, --${spinalCase(BATCH_SIZE_KEY)} [size]`;

/**
 * Shorthand arg for mode.
 * @type {string}
 */
export const MODE_SHORT_ARG = '-m';

/**
 * Commander argument string for mode option.
 * @type {string}
 */
export const MODE_ARGS = `${MODE_SHORT_ARG}, --${spinalCase(MODE_KEY)} [mode]`;

/**
 * Shorthand arg for output directory.
 * @type {string}
 */
export const OUTPUT_DIRECTORY_SHORT_ARG = '-o';

/**
 * Commander argument string for output directory option.
 * @type {string}
 */
export const OUTPUT_DIRECTORY_ARGS = `${OUTPUT_DIRECTORY_SHORT_ARG}, --${spinalCase(OUTPUT_DIRECTORY_KEY)} [directory]`;

/**
 * Shorthand arg for recursive.
 * @type {string}
 */
export const RECURSIVE_SHORT_ARG = '-r';

/**
 * Commander argument string for recursive option.
 * @type {string}
 */
export const RECURSIVE_ARGS = `${RECURSIVE_SHORT_ARG}, --${spinalCase(RECURSIVE_KEY)}`;

/**
 * Shorthand arg for skip errors flag.
 * @type {string}
 */
export const SKIP_ERRORS_SHORT_ARG = '-e';

/**
 * Commander argument string for skip errors option.
 * @type {string}
 */
export const SKIP_ERRORS_ARGS = `${SKIP_ERRORS_SHORT_ARG}, --${spinalCase(SKIP_ERRORS_KEY)}`;

/**
 * Shorthand arg for source directories.
 * @type {string}
 */
export const SOURCE_DIRECTORIES_SHORT_ARG = '-s';

/**
 * Commander argument string for source directory option.
 * @type {string}
 */
export const SOURCE_DIRECTORIES_ARGS = `${SOURCE_DIRECTORIES_SHORT_ARG}, --${spinalCase(SOURCE_DIRECTORIES_KEY)} [directory]`;

/**
 * Shorthand arg for verbosity.
 * @type {string}
 */
export const VERBOSITY_SHORT_ARG = '-v';

/**
 * Commander argument string for verbosity option.
 * @type {string}
 */
export const VERBOSITY_ARGS = `${VERBOSITY_SHORT_ARG}, --${spinalCase(VERBOSITY_KEY)} [verbosity]`;

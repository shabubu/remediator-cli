import {
  BATCH_SIZE_ARGS,
  BATCH_SIZE_DESCRIPTION,
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  DEFAULT_FORMAT,
  DEFAULT_MODE,
  DEFAULT_OUTPUT_DIRECTORY,
  DEFAULT_RECURSIVE,
  DEFAULT_SKIP_ERRORS,
  DEFAULT_SOURCES_DIRECTORY,
  DEFAULT_VERBOSITY,
  FORMAT_ARGS,
  FORMAT_DESCRIPTION,
  FORMAT_KEY,
  MODE_ARGS,
  MODE_DESCRIPTION,
  MODE_KEY,
  OUTPUT_DIRECTORY_ARGS,
  OUTPUT_DIRECTORY_DESCRIPTION,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_ARGS,
  RECURSIVE_DESCRIPTION,
  RECURSIVE_KEY,
  SKIP_ERRORS_ARGS,
  SKIP_ERRORS_DESCRIPTION,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_ARGS,
  SOURCE_DIRECTORIES_DESCRIPTION,
  SOURCE_DIRECTORIES_KEY,
  VERBOSITY_ARGS,
  VERBOSITY_DESCRIPTION,
  VERBOSITY_KEY,
} from 'app/constants';
import determineVerbosity from 'app/lib/config/determineVerbosity';
import commander from 'commander';

/**
 * Flag to know if first source has been collected yet or not.
 * @type {boolean}
 */
let firstSourceLoaded = false;

/**
 * Collection function for source cli arguments.
 * @param {string} source  Cli provided source path.
 * @param {Array}  sources Collection array.
 * @returns {Array}        Collection array.
 */
function collectSources(source, sources) {
  if (firstSourceLoaded) {
    sources.push(source);
    return sources;
  }

  firstSourceLoaded = true;
  return [source];
}

/**
 * Gets CLI config from process arguments.
 * @returns {Object} Config object.
 */
export default function getCliConfig() {
  const {
    argv,
    env: {
      npm_package_version: version,
    },
  } = process;

  const cliResults = commander
    .version(version)
    .option(BATCH_SIZE_ARGS, BATCH_SIZE_DESCRIPTION, DEFAULT_BATCH_SIZE)
    .option(FORMAT_ARGS, FORMAT_DESCRIPTION, DEFAULT_FORMAT)
    .option(MODE_ARGS, MODE_DESCRIPTION, DEFAULT_MODE)
    .option(OUTPUT_DIRECTORY_ARGS, OUTPUT_DIRECTORY_DESCRIPTION, DEFAULT_OUTPUT_DIRECTORY)
    .option(RECURSIVE_ARGS, RECURSIVE_DESCRIPTION, DEFAULT_RECURSIVE)
    .option(SKIP_ERRORS_ARGS, SKIP_ERRORS_DESCRIPTION, DEFAULT_SKIP_ERRORS)
    .option(
      SOURCE_DIRECTORIES_ARGS,
      SOURCE_DIRECTORIES_DESCRIPTION,
      collectSources,
      DEFAULT_SOURCES_DIRECTORY,
    )
    .option(VERBOSITY_ARGS, VERBOSITY_DESCRIPTION, DEFAULT_VERBOSITY)
    .parse(argv);

  return {
    [BATCH_SIZE_KEY]: cliResults[BATCH_SIZE_KEY],
    [FORMAT_KEY]: cliResults[FORMAT_KEY],
    [MODE_KEY]: cliResults[MODE_KEY],
    [OUTPUT_DIRECTORY_KEY]: cliResults[OUTPUT_DIRECTORY_KEY],
    [RECURSIVE_KEY]: cliResults[RECURSIVE_KEY],
    [SKIP_ERRORS_KEY]: cliResults[SKIP_ERRORS_KEY],
    [SOURCE_DIRECTORIES_KEY]: cliResults[SOURCE_DIRECTORIES_KEY],
    [VERBOSITY_KEY]: determineVerbosity(cliResults),
  };
}

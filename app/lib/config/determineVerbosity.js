import {
  DEFAULT_VERBOSITY,
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_KEY,
  VERBOSITY_NONE,
} from 'app/constants';

/**
 * Determines verbosity level from config.
 * @param   {Object} config Remediator-CLI config object.
 * @returns {String}
 */
export default function determineVerbosity(config) {
  const configVerbosity = (config[VERBOSITY_KEY] || '').toLowerCase();

  switch (configVerbosity) {
    case VERBOSITY_NONE:
    case VERBOSITY_ERROR:
    case VERBOSITY_ALL:
      return configVerbosity;
    default:
      return DEFAULT_VERBOSITY;
  }
}

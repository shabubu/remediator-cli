import {
  VERBOSITY_ALL,
  VERBOSITY_ERROR,
  VERBOSITY_KEY,
} from 'app/constants';

/**
 * Logs message to console if verbosity allows.
 * @param {string} message Message to log.
 * @param {object} config  Remediator-CLI config object.
 */
export default function logError(message, config) {
  if (
    config[VERBOSITY_KEY] === VERBOSITY_ALL
    || config[VERBOSITY_KEY] === VERBOSITY_ERROR
  ) {
    console.error(message); // eslint-disable-line no-console
  }
}

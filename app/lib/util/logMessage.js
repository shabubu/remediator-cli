import {
  VERBOSITY_ALL,
  VERBOSITY_KEY,
} from 'app/constants';

/**
 * Logs message to console if verbosity allows.
 * @param {string} message Message to log.
 * @param {object} config  Remediator-CLI config object.
 */
export default function logMessage(message, config) {
  if (config[VERBOSITY_KEY] === VERBOSITY_ALL) {
    console.log(message); // eslint-disable-line no-console
  }
}

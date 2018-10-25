import { ALL_REMEDIATOR_CONFIG_KEYS } from 'app/constants';

/**
 * Takes in remediator-cli config and returns a config for remediator.
 * @param   {Object} config Remediator-cli config object.
 * @returns {Object}        Config with remediator keys and values only.
 */
export default function pruneConfigForRemediator(config) {
  const remediatorConfig = {};

  ALL_REMEDIATOR_CONFIG_KEYS.forEach((configKey) => {
    if (config[configKey] !== undefined) {
      remediatorConfig[configKey] = config[configKey];
    }
  });

  return remediatorConfig;
}

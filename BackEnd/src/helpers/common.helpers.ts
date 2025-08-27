import RESPONSE_CODES from '@src/constants/response.constants';
import { resFormat } from '@src/interfaces/types';

/**
 * Checks if the current environment is development.
 *
 * @returns {boolean} Returns `true` if `NODE_ENV` is set to 'dev', otherwise `false`.
 */
const isDevEnvironment = (): boolean => process.env.NODE_ENV === 'dev';

/**
 * Formats a standardized response object.
 *
 * @param {Object} params - The parameters for the response.
 * @param {(typeof RESPONSE_CODES)[200]} params.status - The response status object.
 * @param {string} [params.message] - Optional message to include in the response.
 * @param {null | object} params.data - The data to include in the response, or `null`.
 * @returns {resFormat} The formatted response object.
 */
const getResponse = ({
  status = RESPONSE_CODES[200],
  message = '',
  data = null,
}: {
  status: (typeof RESPONSE_CODES)[200];
  message?: string;
  data: null | object;
}): resFormat => {
  return { statusCode: status.code, message: message || status.message, data };
};

/**
 * Cleans an object by removing properties with nullish values.
 *
 * @param {object} obj - The object to clean.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.removeNullish=true] - If `true`, removes properties with null or undefined values.
 * @returns {object} The cleaned object with specified properties removed.
 */
const cleanObj = (obj: object, options: { removeNullish?: boolean } = { removeNullish: true }): object => {
  const result: any = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (options.removeNullish) {
      if (value) result[key] = value; // removes null and undefined
    } else {
      if (value !== null && value !== undefined) result[key] = value;
    }
  });
  return result;
};

export { isDevEnvironment, getResponse, cleanObj };

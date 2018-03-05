/**
 * @const {string}
 */
export const DIAMETER_VALUE_CHANGED = "DIAMETER_VALUE_CHANGED";

/**
 * @function setDiameterValue
 * @description Return an action that will set the diameter value in redux
 *
 * @param {number} diameter
 */
export const setDiameterValue = diameter => ({
  type: DIAMETER_VALUE_CHANGED,
  diameter
});

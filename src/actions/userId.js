/**
 * @const {string}
 */
export const USER_ID_CHANGED = "USER_ID_CHANGED";

/**
 * @function setUserId
 * @description Return an action that will set the user id value in redux
 *
 * @param {number} id
 */
export const setUserId = id => ({
  type: USER_ID_CHANGED,
  id
});

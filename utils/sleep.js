/**
 * Pauses the execution of code for a specified amount of time.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified time has elapsed.
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default sleep;
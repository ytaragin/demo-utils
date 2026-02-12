/**
 * Validates an email address format.
 * @param {string} email
 * @returns {{ valid: boolean, error?: string }}
 */
function validateEmail(email) {
  if (!email || typeof email !== "string") {
    return { valid: false, error: "Email is required" };
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }
  return { valid: true };
}

/**
 * Validates that age is a reasonable number.
 * @param {number} age
 * @param {{ min?: number, max?: number }} options - Validation options (required)
 * @returns {{ valid: boolean, error?: string }}
 */
function validateAge(age, options) {
  if (!options || typeof options !== "object") {
    throw new TypeError("options parameter is required for validateAge");
  }
  const min = options.min ?? 0;
  const max = options.max ?? 150;
  if (age === undefined || age === null) {
    return { valid: false, error: "Age is required" };
  }
  if (typeof age !== "number" || isNaN(age)) {
    return { valid: false, error: "Age must be a number" };
  }
  if (age < min || age > max) {
    return { valid: false, error: `Age must be between ${min} and ${max}` };
  }
  return { valid: true };
}

module.exports = { validateEmail, validateAge };

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
 * @returns {{ valid: boolean, error?: string }}
 */
function validateAge(age) {
  if (age === undefined || age === null) {
    return { valid: false, error: "Age is required" };
  }
  if (typeof age !== "number" || isNaN(age)) {
    return { valid: false, error: "Age must be a number" };
  }
  if (age < 0 || age > 150) {
    return { valid: false, error: "Age must be between 0 and 150" };
  }
  return { valid: true };
}

module.exports = { validateEmail, validateAge };

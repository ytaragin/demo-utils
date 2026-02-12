const { validateEmail, validateAge } = require("../src/validators");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.log(`  ✗ ${message}`);
  }
}

console.log("validateEmail:");
assert(validateEmail("user@example.com").valid === true, "accepts valid email");
assert(validateEmail("bad").valid === false, "rejects invalid email");
assert(validateEmail("").valid === false, "rejects empty string");
assert(validateEmail(null).valid === false, "rejects null");

console.log("\nvalidateAge:");
assert(validateAge(25).valid === true, "accepts valid age");
assert(validateAge(-1).valid === false, "rejects negative age");
assert(validateAge(200).valid === false, "rejects age over 150");
assert(validateAge("abc").valid === false, "rejects non-number");
assert(validateAge(null).valid === false, "rejects null");

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);

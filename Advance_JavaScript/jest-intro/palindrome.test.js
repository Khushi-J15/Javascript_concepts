const isPalindrome = require('./palindrome');

// inside this test suite we have 2 test-cases .

test('madam return true', () => {
  expect(isPalindrome("madam")).toBe(true);
})


test('MonaLisa return false', () => {
  expect(isPalindrome("MonaLisa")).toBe(false);
})
/**
Compare two strings and return boolean true when equals.
*@param {string} pwd1 1st password
*@param {string} pwd2 2nd password
@return {Boolean} True if equal
**/

function isSamePassword(pwd1, pwd2) {
  if (pwd1 === pwd2) {
    return true;
  }
  return false;
}

function notMinor(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

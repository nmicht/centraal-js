'use strict';

/**
* A function that validates if two password inputs are the same.
* @param  {string} pass1 First password.
* @param  {string} pass2 Second password.
* @return {boolean}       True appears if they are equal.
*/
function validatePassword(pass1, pass2) {
    if (pass1 === pass2) {
        return true;
    }
    return false;
}

/**
* A function that validates if a person is over the particular requirement.
* @param  {string} age the age of the person.
* @return {boolean}     True appears if the person is 18 or older.
*/
function validateAge(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

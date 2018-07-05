(function () {
    "use strict";
    /*
    compares two string. returns a "true" or "false" depending
    * @param {string}         password1
    * @param {string}         password2
    @return {boolean}       true is that passwords are the same
    */
    function compare(password1, password2) {
        if (password1 = password2) {
            return true;
        }
        return false;
    }

    /*
    validar si es mayor de edad y regresar verdadero, else falso
    @param {string}         edad
    @return {boolean}       true is that is 18 or older
    */
    function valAge(age) {
        if (age >= 18) {
            return true;
        }
        return false;
}
}());

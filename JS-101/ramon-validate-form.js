


/* Receives two passwords, checks if they are the same and sends a message "false" if it is not. 
*
* @param {string} pass1     First password entered
* @param {string} pass2     Second password entered
*
*@return {Boolean} true     True if password is the same      ....
* @return {Boolean} false   False if password is not the same      ....
*
*/

function checkPass(pass1, pass2) {
  
    if (pass1 === pass2) {
        return  true;           
}
return false;

}



/* Validate if a person is an adult. 
*
* @param {number} age     Persons age
*
* @return {Boolean} true     True if person is an adult     ....
* @return {Boolean} false   False if person is not an adult     ....
*
*/

function checkAge(age) {
  
  if (age => 18) {
      return  true;           
}
return false;

}

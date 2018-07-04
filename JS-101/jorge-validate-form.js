

/*pasw1 = prompt('Escribe tu contraseña')
pasw2 = prompt('Vuelve a escribir tu contraseña')

    if (pasw1 != pasw2){
      console.log('Las contraseñas no coinciden');
      }
      else {
        console.log('¡Gracias!')
      } */
/**
 * Compare two strings and return boolean true when equals
 * @param  {string} pasw1 First password
 * @param  {string} pasw2 Second password
 * @return {boolean}       True is equal
 */
function passwords(pasw1, pasw2){
  if (pasw1 === pasw2){
    return true;
    }
  return false;
}
/**
 * Evaluate if the age is according for an adult.
 * @param  {[number]} age The age to compare
 * @return {[boolean]}    True is equal
 */
function orderThan18(age){
  if (edad >= 18){
    return true;
  }
  return false;
}

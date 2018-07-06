(function () {
    /**
  *Serie del 1 hasta que otro número que el usuario define.
  SI el usuario no entra un número real, el sistema lo sigue pidiendo hasta que da un número real.
  */

    let end;

    do {
        end = prompt('dame un número');
        if (isNaN(end) || end <= 1) {
            console.error('Número no válido');
        }
    } while (isNaN(end) || end <= 1);

    for (let serie = 1; serie <= end; end += 1) {
        console.log(serie);
    }
}());

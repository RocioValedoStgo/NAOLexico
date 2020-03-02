function validarEntrada(entrada) {
    tokenReservadas(entrada);
    tokenIdentificador(entrada);
    tokenAgrupacion(entrada);
    tokenSimbolo(entrada);
    tokenTexto(entrada);
}

function tokenReservadas(entrada) {
    var reservadas = /(function|primary|displayData|takeData|var|int|string)/g;
    if (entrada.match(reservadas)) {
        document.getElementById('lexema-reservada').innerHTML = entrada.match(reservadas);
    } else {
        alertify
            .alert("Error de lexico ", function () {
                alertify.message('OK');
            });
    }
}

function tokenIdentificador(entrada) {
    var identificador = /[a-z]*/g;

    console.log(entrada.match(identificador));

    if (entrada.match(identificador)) {

        console.log(identificador.test(entrada));
        console.log(entrada.match(identificador).length);

        document.getElementById('lexema-identificador').innerHTML = entrada.match(identificador);

    } else {
        alertify
            .alert("Error de lexico ", function () {
                alertify.message('OK');
            });
    }
}

function tokenAgrupacion(entrada) {

    var agrupacion = /[{}()]/g;
    console.log(entrada.match(agrupacion));

    if (entrada.match(agrupacion)) {
        document.getElementById('lexema-agrupacion').innerHTML = entrada.match(agrupacion);

    } else {
        alertify
            .alert("Error de lexico ", function () {
                alertify.message('OK');
            });
    }
}

function tokenSimbolo(entrada) {
    var simbolos = /[=+;]/g;

    if (entrada.match(simbolos)) {
        document.getElementById('lexema-simbolo').innerHTML = entrada.match(simbolos);

    } else {
        alertify
            .alert("Error de lexico ", function () {
                alertify.message('OK');
            });
    }

}

function tokenTexto(entrada) {
    var texto = /"[^"]*"/gi;
    console.log(entrada.match(texto));

    if (entrada.match(texto)) {
        console.log(texto.test(entrada));
        document.getElementById('lexema-texto').innerText = entrada.match(texto);
    } else {
        alertify
            .alert("Error de lexico ", function () {
                alertify.message('OK');
            });
    }
}
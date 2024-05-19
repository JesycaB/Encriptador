document.addEventListener('DOMContentLoaded', () => {
    var botonEncriptar = document.querySelector(".btn-encriptar");
    var botonDesencriptar = document.querySelector(".btn-desencriptar");
    var resultado = document.querySelector(".contenedorP");
    var botonCopiar = document.querySelector(".btn-copiar");
    var cajatexto = document.querySelector(".cajatexto");

    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.onclick = copiarTexto;
    cajatexto.oninput = manejarEntradaTexto;

    function encriptar() {
        var texto = recuperarTexto();
        resultado.textContent = encriptarTexto(texto);
        mostrarOcultarBotonCopiar();
        ocultarElementos();
        botonDesencriptar.disabled = true;
    }

    function desencriptar() {
        var texto = recuperarTexto();
        resultado.textContent = desencriptarTexto(texto);
        mostrarOcultarBotonCopiar();
        ocultarElementos();
    }

    function ocultarElementos() {
        var contenedorParrafo = document.querySelector(".contenedorP");
        var mensajeNoEncontrado = document.querySelector(".mensaje1");

        contenedorParrafo.style.backgroundImage = 'none';
        mensajeNoEncontrado.style.display = 'none';
    }

    function mostrarElementos() {
        var contenedorParrafo = document.querySelector(".contenedorP");
        var mensajeNoEncontrado = document.querySelector(".mensaje1");

        contenedorParrafo.style.backgroundImage = 'url(Imagenes/niña2.svg)';
        contenedorParrafo.style.backgroundPosition = 'center';
        contenedorParrafo.style.backgroundPositionY = '5rem';
        contenedorParrafo.style.backgroundSize = '18.2rem';
        mensajeNoEncontrado.style.display = 'block';
    }

    function recuperarTexto() {
        return cajatexto.value;
    }

    function mostrarOcultarBotonCopiar() {
        var textoResultado = resultado.textContent;
        var btnCopiar = document.querySelector(".btn-copiar");

        if (textoResultado.trim() === "") {
            btnCopiar.classList.add("ocultar");
        } else {
            btnCopiar.classList.remove("ocultar");
        }
    }

    function copiarTexto() {
        var textoResultado = resultado.textContent;
        cajatexto.value = textoResultado;
        botonDesencriptar.disabled = false;
        botonEncriptar.disabled = true;
    }

    function manejarEntradaTexto() {
        var texto = cajatexto.value;

        if (texto.trim() === "") {
            resultado.textContent = "";
            mostrarElementos();
            mostrarOcultarBotonCopiar();
            botonDesencriptar.disabled = true;
            botonEncriptar.disabled = true;
        } else {
            ocultarElementos();
            mostrarOcultarBotonCopiar();
            botonEncriptar.disabled = false;
            
            if (contieneMayusculasOAcentos(texto)) {
                alert("El texto contiene mayúsculas o acentos. Por favor, ingresa solo letras minúsculas y sin acentos.");
            }
        }
    }

    function contieneMayusculasOAcentos(texto) {
        return /[A-ZÁÉÍÓÚÑáéíóúñ]/.test(texto);
    }

    function encriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoFinal = textoFinal + "ai";
            } else if (texto[i] == "e") {
                textoFinal = textoFinal + "enter";
            } else if (texto[i] == "i") {
                textoFinal = textoFinal + "imes";
            } else if (texto[i] == "o") {
                textoFinal = textoFinal + "ober";
            } else if (texto[i] == "u") {
                textoFinal = textoFinal + "ufat";
            } else {
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
    }

    function desencriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a" && texto[i + 1] == "i") {
                textoFinal = textoFinal + "a";
                i = i + 1;
            } else if (texto[i] == "e" && texto.slice(i, i + 5) == "enter") {
                textoFinal = textoFinal + "e";
                i = i + 4;
            } else if (texto[i] == "i" && texto.slice(i, i + 4) == "imes") {
                textoFinal = textoFinal + "i";
                i = i + 3;
            } else if (texto[i] == "o" && texto.slice(i, i + 4) == "ober") {
                textoFinal = textoFinal + "o";
                i = i + 3;
            } else if (texto[i] == "u" && texto.slice(i, i + 4) == "ufat") {
                textoFinal = textoFinal + "u";
                i = i + 3;
            } else {
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
    }
});








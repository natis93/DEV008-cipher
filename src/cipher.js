
const cipher = {
  encode: function (desplazamiento, texto) {
    if (!texto.length || !desplazamiento) {
      throw new TypeError()
    }
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {

        if (letras.indexOf(texto[i]) !== -1) {
          const posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
          resultado += letras[posicion];

        }
        else
          resultado += texto[i];
      }
    }

    return resultado;
  },

  decode: function (desplazamiento, texto) {
    if (!texto.length || !desplazamiento) {
      throw new TypeError()
    }
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 - 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {

        if (letras.indexOf(texto[i]) !== -1) {
          const posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 26);
          resultado += letras[posicion];

        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  }
};

export default cipher;


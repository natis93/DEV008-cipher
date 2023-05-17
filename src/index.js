import cipher from "./cipher.js";

//window.addEventListener("load",inicio,true);
document.getElementById("mensaje").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
}, true);
document.getElementById("cifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;

  document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);


}, true);

document.getElementById("descifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);

}, true);
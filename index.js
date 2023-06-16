function saludar() {
  alert("bienvenido a RopaUrbana.com " + nombre);
}
//
//
//       Bienvenida
let nombre = prompt("Hola primero que nada nos gustaria saber tu nombre");
while (nombre == "") {
  alert("este no es un nombre valido");
  nombre = prompt("ingrese un nombre valido");
}
saludar();
//
//
//      Pregunta para calcular el envio
let preguntaBsAs = true;
while (preguntaBsAs) {
  let BsAs = prompt("sos de buenos aires ingresa si o no");
  switch (BsAs) {
    case "si":
      alert("el costo del envio de tu compra es sin cargo");
      preguntaBsAs = false;
      break;
    case "no":
      alert("el costo del envio dependera de la empresa mercadoEnvios");
      preguntaBsAs = false;
      break;
    default:
      alert("no es una respuesta valida indicada");
  }
}
//
//
//
//       venta
const remera = 500;
const iva = remera * 0.21;

let respuesta = prompt("por ahora solo tenemos en stock remeras queres comprar? indica si o no");
if (respuesta == "si") {
  let cantidad = Number(prompt("indique cuantas quiere"));
  let remeraTotal = cantidad * remera;
  let ivaTotal = cantidad * iva;
  let compraTotal = remeraTotal + ivaTotal;
  alert("activa la consola para poder ver la factura");
  console.log("precio de las remeras es " + remeraTotal);
  console.log("el valor del iva total es de " + ivaTotal);
  console.log("el valor total de la compra es de " + compraTotal);
  console.log("muchas gracias por tu compra");
}
if (respuesta == "no") {
  alert("espero poder ayudarte pronto");
}
if (respuesta != "si" && respuesta != "no") {
  alert("respuesta no valida");
}

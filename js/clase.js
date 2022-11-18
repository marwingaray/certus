let nombres = parseInt(prompt("Ingrese nombre del trabajador"));
let diasLab = parseInt(prompt("Ingrese cantidad e dias laborados"));

let aPagar = parseInt(diasLab) + 40;
if (diasLab > 15) {
  let bono = (20 / 100) * apagar;
  document.write(bono + aPagar);
} else {
  document.write(aPagar);
}

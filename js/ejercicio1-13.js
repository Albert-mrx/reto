
/*
Ejercicio 1: Se requiere calcular el promedio de 3 notas ingresadas por el teclado.
*/
// let nota1 = +prompt("ingrese nota 1",0);
// let nota2 = +prompt("ingresa nota 2",0);
// let nota3 = +prompt("ingresa nota 3",0);
// let notaFinal = (nota1+nota2+nota3)/3;
// document.write(`tu promedio Final es : ${notaFinal}`);
/*
Ejercicio 2: Leer el sueldo de 3 empleados y aplicarles un aumento del 10%, 12% y 15% respectivamente. Mostrar reporte con los nuevos resultados
*/
// let sueldo1 = +prompt("ingresa sueldo del 1er empleado",0);
// let sueldo2 = +prompt("ingresa sueldo del 2do empleado",0);
// let sueldo3 = +prompt("ingresa sueldo del 3er empleado",0);

// function aumento(sueldo,porcentaje) {
//     let  porciento= (sueldo*porcentaje)/100;
//     let sueldoFinal = porciento+sueldo;
//     document.write(`tu sueldo es: ${sueldoFinal}`);
//     return;
// }
// aumento(sueldo1,10);
// aumento(sueldo2,12);
// aumento(sueldo3,15);

/*
Ejercicio 3: Un alumno desea saber cuál es su calificación final en un curso, dicha calificación se compone de tres exámenes cuyos pesos son del 30%, 30% y 40%
*/

let examen1= +prompt("ingresa nota examen1",0);
let examen2= +prompt("ingresa nota examen2",0);
let examen3= +prompt("ingresa nota examen3",0);
let valor = (examen1*30)/100;
let valor2=(examen2*30)/100;
let valor3= (examen3*40)/100;
let notaFinal=valor+valor2+valor3;
if(notaFinal>=12){
    document.write("aprobaste! 😎");
}else{
    document.write("desaprobado 😥");
}
document.write(` tu calificacion final es de  : ${notaFinal}`);
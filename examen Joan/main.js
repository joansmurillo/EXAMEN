//declaro variavles universales
var solver;
var multiplosTres = [];
var desde;
var hasta;
var resultado;
//variable div
var primera = document.getElementById("primera");
var divSolucion = document.getElementById("solucion");
var dibujarTabla = document.getElementById("dibujar");
var cedula = document.getElementById("segunda");
var iterador = document.getElementById("iterador");
var procesar = document.getElementById("procesar");
//Ocultar div
divSolucion.style.display = "none";
cedula.style.display = "none";
//Metodo generar
document.getElementById("Generar")
    .addEventListener("click", function generar() {
        obtenerDatos();
        solver = new Solver(desde, hasta)
        //Multiplos de 3
        solver.GenMultiplosTres();
    })

//Dibujar Tabla
dibujarTabla.addEventListener("click",function(){
    obtenerDatos(); //obtengo datos ingresados por el usuario
    solver = new Solver(desde, hasta); //creo nueva instancia de la clase Solver, le paso los datos ingresados por el usuario.
    solver.GenMultiplosTres();  //ejecuto método para generar la solver.
    resultado = new Resultado(divSolucion,solver.multiplosTres);
    resultado.dibujarTabla2();
 });
//Mostrar cedula
iterador.addEventListener("click", function (){
    primera.style.display = "none";
    cedula.style.display = "block";
})
//Cedula Suma
procesar.addEventListener("click", function(){
    obtenerDatos();
    solver = new Solver(desde, hasta)
    //Multiplos de 3
    if(CI % 2 === 0){
        console.log("La Suma de los Elementos es = " + solver.sumaArray());  
    }else{
        console.log("La Suma de los Elementos + 3 es = " + parseInt(solver.sumaArray()+3))
    }
})

function obtenerDatos() {
    desde = parseInt(document.getElementById("desde").value);
    hasta = parseInt(document.getElementById("hasta").value);
    CI = parseInt(document.getElementById("cedula").value);
}
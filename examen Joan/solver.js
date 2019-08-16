class Solver {
    multiplosTres = [];
    rangoNumero = [];
    constructor(desde, hasta) {
        this.desde = desde;
        this.hasta = hasta;
    }
    GenMultiplosTres() {
        this.rangoNumero = [];
        this.multiplosTres = [];
        this.rangoNumero.push(this.desde);
        generarMultiplosTres(this.rangoNumero, this.hasta)
        return comprobar(this.rangoNumero, this.multiplosTres)
    }
    //funcion suma de elementos del array
    sumaArray() {
        var suma = 0;
        this.rangoNumero = [];
        this.multiplosTres = [];
        this.rangoNumero.push(this.desde);
        generarMultiplosTres(this.rangoNumero, this.hasta)
        comprobar(this.rangoNumero, this.multiplosTres)
        this.multiplosTres.forEach(element => {
            suma = suma + element;
        });
        return suma;
    }
}
function generarMultiplosTres(rangoNumero, hasta) {
    var desde = rangoNumero[rangoNumero.length - 1];

    if (desde >= hasta) {
        return rangoNumero
    } else {
        var nuevo = desde + 1;
        rangoNumero.push(nuevo);
        return generarMultiplosTres(rangoNumero, hasta);
    }
}
function comprobar(rangoNumero, multiplosTres) {
    rangoNumero.forEach(element => {
        if (element % 3 == 0) {
            multiplosTres.push(element);
        }
    });
    return multiplosTres;
}
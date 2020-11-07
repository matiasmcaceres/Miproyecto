const fs = require("fs");

let moduloUsuario = {
    archivo: "./usuario.json", //traemos el archivo json
    leerJSON: function() {
        let usuarioLeido = fs.readFileSync(this.archivo) //lee el archivo JSON

    }
}
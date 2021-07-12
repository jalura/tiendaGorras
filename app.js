// Creamos las instancias de las dependencias para nuestra API

// importamos express
const servExpress = require('express');
// importamos body-parse
const bodyParser = require('body-parser');

// En caso de que se realice el Deployment se toma el puerto asigando en el Hosting
// establecemos por default que si lo corremos localmente se abra en el puero 3000
const PORT = process.env.PORT || 3069;

// Creamos una instancia del servidor express
const app = servExpress();

app.use(bodyParser.json());

// =====================================================================
// End Point ... Raiz ... Test
// =====================================================================
app.get('/', ( req, res ) => {

     respuesta = {
        status: true,
        message: 'Welcome to my API Cap Store',
    }
    res.send(respuesta);
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n\n');   
})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//                 Consulta productos (Gorras)
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// =============================================================================
// End Point. GET - Valida matricula de usuario (Ruta: usuarioMatricula)
// =============================================================================
app.get('/gorras', ( req, res ) => {
    var tienda = new Object();
    tienda.status = true;
    tienda.mensaje = "Consulta de Gorras realizada con exito";
    tienda.numArticulos = 3;

    var tiendaGorras = new Array();
    var gorra = {
        "id" :  "G001001",
        "name" :  "Gorra Azul",
        "image" : "https://cdn.pixabay.com/photo/2021/07/05/22/11/cap-6390187_960_720.png",
        "price" : "1.00",
        "stock" : "10"
        }
    tiendaGorras.push(gorra);

    var gorra = {
        "id" :  "G001003",
        "name" :  "Gorra Blanca",
        "image" : "https://cdn.pixabay.com/photo/2021/07/05/22/11/cap-6390189_960_720.png",
        "price" : "1.00",
        "stock" : "12"
        }
    tiendaGorras.push(gorra);

    var gorra = {
        "id" :  "G001004",
        "name" :  "Gorra Negra",
        "image" : "https://cdn.pixabay.com/photo/2021/07/05/22/11/cap-6390186_960_720.pn",
        "price" : "1.00",
        "stock" : "18"
        }
    tiendaGorras.push(gorra);

    tienda.inventario = tiendaGorras;    
    var myString = JSON.stringify(tienda);
    console.log(myString);

    res.send(tienda);
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n\n');   
});

////////////////////////////////////////////////////////////////////////////////
// Llamamos a la funciòn listen, para verificar si hay eco en el puerto
////////////////////////////////////////////////////////////////////////////////
app.listen( PORT, () => console.log(`Server Running on Port ${PORT}`));
console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n\n');   


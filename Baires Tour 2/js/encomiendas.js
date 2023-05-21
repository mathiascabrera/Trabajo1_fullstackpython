let data_provincias = {
    1: "Buenos Aires",
    2: "Catamarca",
    3: "Chaco",
    4: "Chubut",
    5: "Ciudad Autónoma de Buenos Aires",
    6: "Córdoba",
    7: "Corrientes",
    8: "Entre Ríos",
    9: "Formosa",
    10: "Jujuy",
    11: "La Pampa",
    12: "La Rioja",
    13: "Mendoza",
    14: "Misiones",
    15: "Neuquén",
    16: "Río Negro",
    17: "Salta",
    18: "San Juan",
    19: "San Luis",
    20: "Santa Cruz",
    21: "Santa Fe",
    22: "Santiago del Estero",
    23: "Tierra del Fuego",
    24: "Tucumán",
};

let data_productos = {
    1: "Articulos Cocina / Acero Inoxidable (ollas. Sartenes. Otros). Pasteleria",
    2: "Cuchillos",
    3: "Articulos Deportivos",
    4: "Articulos de Libreria",
    5: "Articulos de Pesca",
    6: "Aspiradoras",
    7: "Auriculares",
    8: "Bicicletas",
    9: "Biberones o Mamaderas",
    10: "Bijouterie",
    11: "Bolsa de Dormir",
    12: "Bolso de Mano de Cuero",
    13: "Cafetera",
    14: "Calzados",
    15: "Camara Fotografica / Vigilancia",
    16: "Camara Fotografica - Accesorios",
    17: "Carrito de Bebe",
    18: "Cargadores y Transformadores",
    19: "Consola de Sonido",
    20: "Consola Videojuegos y Partes",
    21: "Control Remoto",
    22: "Insumos de Informatica (CPU. Placa Madre. Placa de Sonido. Notebook. Memorias)",
    23: "Monitores",
    24: "Tablets",
    25: "Notebook",
    26: "Drones",
    27: "Esquis para Nieve",
    28: "Fundas/Estuches Plasticos",
    29: "Golf Palos",
    30: "GPS",
    31: "Griferia Baño",
    32: "Guitarra Acustica",
    33: "Guitarra Electrica",
    34: "Herramientas",
    35: "Herramientas Electricas",
    36: "Impresoras 3D",
    37: "Impresoras Multifuncion",
    38: "Indumentaria General (Adulto. Bebe. etc)",
    39: "Juguetes",
    40: "Libros",
    41: "Mochilas Material textil",
    42: "Parlantes",
    43: "Paneles Led",
    44: "Proyectores",
    45: "Reloj Pulsera",
    46: "Smart Watch",
    47: "Repuestos de Bicicletas",
    48: "Respuesto de Auto",
    49: "Repuestos de Moto",
    50: "Telefonos Celulares",
    51: "Repuestos de Celulares",
    52: "TV led",
    53: "Blueray - DVD - Juegos de Video",
    54: "Termos",
    55: "Anteojos de SOL",
};

var peso = document.querySelector("#peso");
var alto = document.querySelector("#alto");
var ancho = document.querySelector("#ancho");
var largo = document.querySelector("#largo");


let tpl_provincias = `<option value="">Selecciona una opción</option>`;
for (let key in data_provincias) {
    tpl_provincias += `<option value="${key}">${data_provincias[key]}</option>`;
}

let tpl_productos = `<option value="">Selecciona una opción</option>`;
for (let key in data_productos) {
    tpl_productos += `<option value="${key}">${data_productos[key]}</option>`;
}

document.querySelectorAll("#origen, #destino").forEach((elem) => (elem.innerHTML = tpl_provincias));
document.querySelector("#productos").innerHTML = tpl_productos;

function cotizar() {
    if (peso.value === '' || alto.value === '' || ancho.value === '' || largo.value === '') {
        document.querySelector(".msg").removeAttribute("hidden")
        document.querySelector(".total").innerHTML = ""
        return;
    }
    document.querySelector(".msg").setAttribute("hidden", "");

    let tarifa_base = 5;/* tarifa base pesos */
    let dim = 166; /* factor de dimensionalidad  */

    let volumen = (peso.value * alto.value * ancho.value * largo.value) / dim;
    let costo_envio = tarifa_base * volumen;

    document.querySelector(".total").innerHTML = "El total a pagar es: $" + parseInt(costo_envio).toLocaleString() + " pesos";
}



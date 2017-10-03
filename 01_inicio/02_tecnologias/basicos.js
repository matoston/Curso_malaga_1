var data = [{precio:12}, {precio:14},{precio:19}];

// la función callback del método forEach, propio de ES5
// se define con el nuevo formato "Arrow function"
// con elem como único argumento
data.forEach( elem => {
    if (true) {
        // uso de const y let    
        const iva = 1.16
        let precioFinal =  elem.precio * iva
        // Salida por consola utilizando "template strings"
        // en los que se conservan los saltos de línea
        console.log(`
        Oferta: 
        El precio final es ${precioFinal}`);
    }

    // linea que daría error 
    console.log (iva)
});
const hbs = require('hbs');

// Helpers de HBS (Variables globales)
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) =>{
    // Convertir una palabra en su primera letra en mayusculas
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    return true;
}

function mostrarDatoCurioso() {
    // Array con datos curiosos sobre animales
    const datosCuriosos = [
        "Los perros tienen un sentido del olfato entre 10.000 y 100.000 veces más agudo que los humanos.",
        "Los gatos pueden hacer un salto de hasta seis veces la longitud de su cuerpo.",
        "Un delfín puede reconocer su reflejo en un espejo, lo que indica que tienen conciencia de sí mismos.",
        "Las tortugas pueden respirar a través de su cloaca, lo que les permite mantenerse sumergidas durante largos períodos.",
        "Los caballos pueden dormir de pie, pero también pueden tumbarse para descansar profundamente.",
        "Los elefantes tienen una memoria excelente y pueden recordar a otros elefantes durante décadas.",
        "Sabias que durante el siglo pasado, las autoridades estadounidenses exigían a los migrantes mexicanos que, si cruzaban la frontera acompañados de perros, los animales debían estar ‘free of lice’. Esta frase, debido a su pronunciación (fri of lais), fue adoptada por los ciudadanos mexicanos y modificada al argot popular como ‘Firulais’, convirtiéndose en un término familiar para referirse a los perros."
    ];

    // Seleccionamos un dato aleatorio del array
    const datoAleatorio = datosCuriosos[Math.floor(Math.random() * datosCuriosos.length)];

    // Mostramos el dato en una alerta
    alert(datoAleatorio);
}



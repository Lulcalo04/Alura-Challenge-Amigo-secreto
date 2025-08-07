// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

//Cuando toques el boton de agregar amigo
function agregarAmigo(){
    //Copio el valor del html
    let nombreNuevoAmigo = document.getElementById("amigo").value.trim();

    //Si el nombre es vacío, muestro un mensaje de alerta
    if (nombreNuevoAmigo == ""){
        alert("Por favor, ingresa un nombre.");
    } else {
        //Añado el nombre a la lista de amigos
        amigos.push(nombreNuevoAmigo);

        //Borro el campo de texto
        document.getElementById("amigo").value = "";

        actualizarLista()
    }
}

//Actualiza del html
function actualizarLista() {

    //obtengo la lista mostrada en pantalla
    let lista = document.getElementById("listaAmigos")

    // Limpiar la lista actual
    lista.innerHTML = "" 

    // Agregar cada amigo a la lista
    for (let amigo of amigos) {
        
        let item = document.createElement('li')

        item.innerHTML = amigo

        lista.append(item)
    }
}

function sortearAmigo() {

    // Verificar si hay amigos para sortear
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo sorteado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo sorteado es:    " + amigoSorteado + "!!!!";
}
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces")
let contador = 0;

boton.addEventListener('click', (e) => {
    e.preventDefault();
    if (contador == 0) {
        enlaces.className = ("enlaces dos");
        contador = 1;
    } else {
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        contador = 0;
    }
} )










const pelota = {
    posicion: {
        x: 150,
        y:150
    },
    color: "rojo",
    radio:25
}

const {posicion: pos, radio: r, color: colour} = pelota

async function foo(mensaje){
    await console.log(mensaje);
}
foo("q tal")

let mochila = ["lapiz", "lapicera", "corrector", "joya"]
const mochila2 = {
    lapiz: {
        x: 150,
        y:150
    },
    lapicera: "rojo",
    corrector:25
}

const [lapiz, lapicera, corrector] = mochila2

console.log(lapiz);
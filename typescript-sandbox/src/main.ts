import "./style.css";

const botonComprobar = document.getElementById(
  "comprobar"
) as HTMLButtonElement;

const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);
const numeroParaAcertar = generarNumeroAleatorio();

function comprobarNumero() {
  const texto = document.getElementById("numero") as HTMLInputElement;
  const numero = parseInt(texto.value);

  if (numero > numeroParaAcertar) {
    console.log("El número que escribiste es mayor");
  } else if (numero < numeroParaAcertar) {
    console.log("El número que escribiste es menor");
  } else if (numero === numeroParaAcertar) {
    console.log("ACERTASTE!");
  }
}

botonComprobar.addEventListener("click", comprobarNumero);

/* Lógica de Programação
[x] saber quando o usuario clicou no botao
[x] mudar o posicionamento do modal
[x] fazer a mascara ficar visivel
[ ] quando clicar na mascara fechar o modal
*/

const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
function mostarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-30%";
  mascara.style.visibility = "hidden";
}

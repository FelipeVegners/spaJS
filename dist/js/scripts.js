//Creating an array with fields
const campos = [
  document.querySelector("#data"),
  document.querySelector("#qtd"),
  document.querySelector("#valor")
];

campos[0].focus();

let tbody = document.querySelector("table tbody");
let form = document.querySelector(".form");

form.addEventListener("submit", function() {
  let tr = document.createElement("tr");

  event.preventDefault();

  campos.forEach(function(campo) {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);

    remover.classList.remove('disabled');
  });

  let tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  form.reset();
  campos[0].focus();
});


remover.addEventListener("click", function() {

  let tabela = document.querySelector('#tabela');
  let rowCount = tabela.rows.length;
  tabela.deleteRow(rowCount - 1);

  remover.classList.toggle("disabled", rowCount < 2);

});

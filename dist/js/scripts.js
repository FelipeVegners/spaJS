//Creating an array with fields
const fields = [
  document.querySelector("#data"),
  document.querySelector("#qtd"),
  document.querySelector("#value")
];

fields[0].focus();

let tbody = document.querySelector("table tbody");
let form = document.querySelector(".form");

form.addEventListener("submit", function() {
  let tr = document.createElement("tr");

  event.preventDefault();

  fields.forEach(function(campo) {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);

    remover.classList.remove('disabled');
  });

  let tdVolume = document.createElement("td");
  tdVolume.textContent = fields[1].value * fields[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  form.reset();
  fields[0].focus();
});


remover.addEventListener("click", function() {

  let tabela = document.querySelector('#tabela');
  let rowCount = tabela.rows.length;
  tabela.deleteRow(rowCount - 1);

  remover.classList.toggle("disabled", rowCount < 2);

});

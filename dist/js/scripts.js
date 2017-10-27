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

let importBtn = document.querySelector('#import');

importBtn.addEventListener('click', function() {

  remover.classList.remove('disabled');

  let requestURL = 'https://viacep.com.br/ws/13050420/json/';

  let myRequest = new XMLHttpRequest();

  myRequest.open('GET', requestURL);

  myRequest.onload = function() {

    let dataImported = JSON.parse(myRequest.responseText);
    let tr = document.createElement('tr');

    const dataFields = [
      dataImported.cep,
      dataImported.ibge,
      dataImported.gia
    ];
    // iterate the array with Vanilla Js for()

    // for(i = 0; i<dataFields.length; i++){
    //
    //   let td = document.createElement("td");
    //   td.textContent = dataFields[i];
    //   tr.appendChild(td);
    // }

    // iterate the array with ES6 for()
    for (const field in dataFields) {

      let td = document.createElement("td");
      td.textContent = dataFields[field];
      tr.appendChild(td);

    }

    let tdVol = document.createElement('td');

    tdVol.textContent = dataFields[1] * dataFields[2];

    tr.appendChild(tdVol);

    let tbody = document.querySelector("table tbody");

    tbody.appendChild(tr);

  }

  myRequest.send();

});

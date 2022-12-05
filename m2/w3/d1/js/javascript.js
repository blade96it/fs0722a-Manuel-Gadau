let inputNome = document.querySelector("#nome");
let inputCognome = document.querySelector("#cognome");
let inputData = document.querySelector("#data");
let inputBottone = document.querySelector("#bottone");

function persona(nome, cognome, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.data = data;
}

let input1 = inputNome.value;
let input2 = inputCognome.value;
let input3 = inputData.value;

inputBottone.addEventListener("click", function() {
    console.log(5);
})


//creo la funzione per poter inserire nel tastierino i relativi input
function inputTastierino(elemento) {
    let input = elemento.getAttribute('data-simbolo');
    document.getElementById('numeri').value += input;
}
//creo la funzione per poter calcolare il totale dei numeri inseriti
function tot(){
    let numeri = document.getElementById('numeri');
    numeri.value = eval(numeri.value);
}
//creo la funzione per poter svuotare quanto contenuto nella text-box
function svuota(){
    let numeri = document.getElementById('numeri');
    numeri.value = "";
}
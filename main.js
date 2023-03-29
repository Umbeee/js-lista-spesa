let i=0;

let array = [
    "uova",
    "latte",
    "carne",
    "pane",
    "dentifricio",
    "biscotti"
]

let li = document.getElementById('lista-spesa');

while(i < array.length){
    li.innerHTML += `<li>${array[i]}</li>`
    i++;
}

function inputSpesa(){
    let inputNuovo = document.getElementById('inputNuovo').value;

    if(inputNuovo!=0){
        console.log(inputNuovo)
        array.push(inputNuovo)
        console.log(array)

        li.innerHTML += `<li>${array[array.length - 1]}</li>`
    }

}

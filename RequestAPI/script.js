let url = 'https://significado.herokuapp.com/v2/livro';

let dadosTxt = document.querySelector("#search");
let bntTxt = document.querySelector("#send");
let resultados = document.querySelector("#resultados");

bntTxt.addEventListener("click", (event) => {
    event.preventDefault();
    let palavra = dadosTxt.value;
    console.log(palavra);
    if(palavra === ''){
        alert('Não rolou');
    } else {
        fetch(`${url}${palavra}`).then((resposta) => console.log(resposta))
    }
});



let url = 'https://significado.herokuapp.com/v2/';

let dadosTxt = document.querySelector("#search");
let bntTxt = document.querySelector("#send");
let resultados = document.querySelector("#resultados");

bntTxt.addEventListener("click", (event) => {
    event.preventDefault();
    let palavra = dadosTxt.value;
    console.log(palavra);
    if(palavra === ''){
        resultados.innerHTML = `<p id="desc-alert"><strong>Erro!</strong> Escreva uma palavra!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultados.innerHTML = `
                <h3 id="result-word">${palavra}</h3>
                <p id="desc-word"><span>1°</span>${data[0].meanings[0]}</p>
                <br>
                <p id="desc-word"><span>2°</span>${data[0].meanings[1]}</p>
                `
            }).catch(() => {
                resultados.innerHTML = `<p id="desc-alert"><strong>Erro!</strong> Palavra não encontrada</p>`
            })
    }
});



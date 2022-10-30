let urlDicio = 'https://significado.herokuapp.com/v2/';
let urlPexels = 'https://api.pexels.com/v1/search?query=';
const auth = "563492ad6f91700001000001be4b6bf59dab4cf6a0b411cb45d2de28"

const form = document.querySelector("#informacoes");
let dadosTxt = document.querySelector("#search");
let btnTxt = document.querySelector("#send");
let resultados = document.querySelector("#resultados");

btnTxt.addEventListener("click", (event) => {
    event.preventDefault();
    //API DICIO
    let palavra = dadosTxt.value;
    if(palavra === ''){
        resultados.innerHTML = `<p id="desc-alert"><strong>Erro!</strong> Escreva uma palavra!</p>`
    } else {
        fetch(`${urlDicio}${palavra}`)
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
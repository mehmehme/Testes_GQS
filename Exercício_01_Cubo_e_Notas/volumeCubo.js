//crie uma função que encontra o volume do cubo

const { isStringTypeAnnotation } = require("@babel/types");
const { error } = require("console");

function volCub(lado){
    if(Number.isNaN(lado)){
        console.log("Oque faço com isso");
        return;
    }
    let aresta = lado;
    aresta = lado*lado*lado;
    if(aresta <= 0){
        console.log("Erro, deu cubo inexistente");
        return;
    }
    return aresta;
}

module.exports = volCub;
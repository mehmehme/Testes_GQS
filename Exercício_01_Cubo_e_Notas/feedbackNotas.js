function aprovado(notaAluno){
    let nota = notaAluno;
    let aprovado = 10;
    let reprovado = 4.5;

    if(nota === aprovado){ 
        console.log("aprovado")
        return true;
    }
    if(nota <= reprovado){
        console.log("reprovou mds,estude!!")
        return false;
    }
    if( nota > reprovado && nota < aprovado){
        nota = aprovado - nota;
        return nota;
    }
}

module.exports = aprovado;
const aprovado = require('./feedbackNotas.js');


test("O aluno nota 10 é aprovado?", ()=>{
    expect(aprovado(10)).toBe(true);
});

test("O aluno com nota menor de 4.5 é reprovado?", ()=>{
    expect(aprovado(4)).toBe(false);
});

test("O aluno com nota 8 precisa de quanto?", ()=>{
    expect(aprovado(8)).toBe(2);
});
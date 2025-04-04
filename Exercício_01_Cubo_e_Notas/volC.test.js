const volCub = require('./volumeCubo.js');

test("Calcula volume de inteiros?", ()=>{
expect(volCub(4)).toBe(64);
});

test("Calcula volume de reais?", ()=>{
    expect(volCub(4.5)).toBe(91.125);
    });

test("Não calcula volume negativos ou vazios?", ()=>{
    expect(volCub(-2)).toBe(undefined);
});

test("Não calcula NaN?", ()=>{
    expect(volCub('a')).toBe(NaN);
});
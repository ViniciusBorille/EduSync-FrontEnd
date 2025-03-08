const soma = require("./soma")

test("Soma de 2 + 3 deve ser 5", () => {
    expect(soma(2,3)).toBe(5);
});

test("Soma de números negativos", () => {
    expect(soma(-1,-4)).toBe(-5);
});
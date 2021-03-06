console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isInteger);

// π₯ isNaN (is Not A Number) => μ«μκ° μλλ€.
// => λ€μ§μ΄μ κ²°κ³Όκ° λμ€κΈ° λλ¬Έμ ν·κ°λ¦΄ μ μλ€.
// => ES2015+ λΆν° isNaNλ "λμ¨ν κ²μ¬", Number.isNaNλ "μκ²©ν κ²μ¬"λ‘ λ°λμμ
// => Number.isNaN μ μ¬μ©νλ κ²μ΄ μμ νλ€.

console.log(Number.isNaN(123)); // false  (μ«μκ° μ«μκ° μλλ€ => μ«μκ° λ§λ€.)

console.log(Number.isNaN(123 + 'νμ€νΈ')); // false
console.log(typeof (123 + 'νμ€νΈ')); // string
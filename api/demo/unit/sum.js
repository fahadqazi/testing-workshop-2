// let's sum some numbers with TDD
export default sum;

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0)
}

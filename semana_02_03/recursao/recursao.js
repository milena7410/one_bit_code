function divisao(n) {
  console.log(n);
  if (n % 2 === 0) {
    divisao(n / 2);
  } else return n;
}

divisao(9);

// function fatorial(num) {
//   console.log(num);

//   if (num === 0) {
//     return 1;
//   } else if (num === 1) {
//     return 1;
//   }
// }

//fatorial(7);

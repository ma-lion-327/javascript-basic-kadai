let num = Math.floor(Math.random() * 29);
console.log('変数numの値は' + num + 'です');

if (num === 0) {
  console.log('変数numの値は' + num + 'なので3と5のどちらの倍数でもありません。');
} else if (num % 3 == 0 && num % 5 == 0) {
  console.log('変数numの値は3と5の倍数です');
} else if (num % 3 == 0) {
  console.log('変数numは3の倍数です');
} else if (num % 5 == 0) {
  console.log('変数numの値は5の倍数です');
} else  {
  console.log('変数numの値は' + num + 'なので3と5のどちらの倍数でもありません。');
}
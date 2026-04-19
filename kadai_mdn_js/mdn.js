const today = new Date();

let outToday = today.getFullYear() + '年';
outToday += (today.getMonth() + 1) + '月';
outToday += today.getDate() + '日';
console.log(outToday);
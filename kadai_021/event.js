const onBtn = document.getElementById('btn');
const text = document.getElementById('text');
onBtn.addEventListener('click', () => {
  setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
  },2000)
});
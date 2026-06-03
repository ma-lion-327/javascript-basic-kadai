const onBtn = document.getElementById('btn');
const newText = document.getElementById('text');
onBtn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
});
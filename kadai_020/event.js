onBtn = document.getElementById('btn');
newText = document.getElementById('text');
onBtn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
});
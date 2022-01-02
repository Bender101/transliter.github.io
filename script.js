const button = document.getElementById('button');
const inputText = document.getElementById('input0');
const blockRu = document.getElementById('blockRu');
const blockTrans = document.getElementById('blockTrans');
const words = document.querySelector('block')

button.addEventListener('click', () => {
    const text =
        inputText.value.length > 22 ? inputText.value.slice(0, 15) + '\u2026' : inputText.value;
    const blockWords = document.createElement('div');
    blockWords.className = 'dictionary';
    blockWords.setAttribute('title', inputText.value);
    blockRu.appendChild(blockWords);
    blockWords.innerText = text;
});

blockWords.addEventListener('mouseover', () => {
    blockWords.getAttribute('title').innerText
})
const input_filed = document.querySelector('.input-filed');
const btn = document.querySelector('.btn');

function copyData () {
    input_filed.select();
    input_filed.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input_filed.value);
}
btn.addEventListener("click", copyData)
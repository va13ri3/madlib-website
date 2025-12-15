var button = document.getElementById("submit")
console.log(button);
var words = document.querySelectorAll('input[type="text"]');
console.log(words);


button.addEventListener('click', getWords)

function getWords() {
    console.log(button);
    console.log(words);
}


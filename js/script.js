const button = document.getElementById("submit")


button.addEventListener('click', getWords)
button.addEventListener('click', function(event) {
    event.preventDefault(); 
});


function getWords() {    
    var words = document.querySelectorAll('input[type="text"]');
    var placeholders = document.querySelectorAll(".userInput");
    placeholders.forEach((placeholder,index)=> {
        console.log(placeholder,index);
        console.log(words[index]);
        

});

}
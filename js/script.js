var adjectiveOne = document.getElementById("adjective");
var twoWord = document.getElementById("two");
var anImal = document.getElementById("animal");
var adjectiveTwo = document.getElementById("adjective2");
var objectOne = document.getElementById("object");
var veRb = document.getElementById("verb");
var objectTwo = document.getElementById("object2");
var objectThree = document.getElementById("object3");
var adjectiveThree = document.getElementById("adjective3");
var objectFour = document.getElementById("object4");
var butTon = document.getElementById("submitBtn");
var outPut = document.getElementById("output");


console.log(adjectiveOne);
console.log(twoWord);
console.log(animal);
console.log(adjectiveTwo);
console.log(objectOne);
console.log(veRb);
console.log(objectTwo);
console.log(objectThree);
console.log(objectFour);
console.log(butTon);
console.log(outPut);

butTon.addEventListener('click', myFunction);

function myFunction() {
    const firstAdj = adjective.value;
    const doubleAdj = two.value;
    const animalInput = animal.value;
    const secondAdj = adjective2.value;
    const firstObj = object.value;
    const verbInput = verb.value;
    const secondObj = object2.value;
    const thirdObj = object3.value;
    const thirdAdj = adjective3.value;
    const fourthObj = object4.value;
    
    outPut.innerHTML = ('It was a') + (' ') + (firstAdj)
     + ('afternoon when the sky above Pickleberry Park suddenly split open with a') + (' ') + (ageUser) + ('<br>') + ('Favorite Color:') + (' ') + (colorUser) + ('<br>') + ('Favorite Pet:') + (' ') + (selectedValue) + ('<br>') + ('Hobbies:') + (' ') + (checkedValues); 
    }
    
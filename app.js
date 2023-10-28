//prompt
//alert
//alert("Hello World")
//prompt("How are you?")
//let name = prompt("What is your name?")
//console.log(name)

// Get a reference to the button element
const button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function(){
    const userInput = window.prompt("What is your name?");
    // Check if the user has entered a name or not
    if (userInput !== null){
        alert("Nice to meet you " + userInput + "!");
    }
    else{
        alert("See you next time!");
    }
});

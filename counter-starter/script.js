function add(step) {
    // console.log("add function");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number)
}

// function showName() {
//     // console.log("Aleksandra");
//     let username = document.getElementById("name-text").value;
//     console.log("Hi, " + username);
    
// }
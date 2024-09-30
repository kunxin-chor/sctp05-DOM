let button = document.querySelector("#calculate");
button.addEventListener("click", function(){
    let weightTextBox = document.querySelector("#weight");
    // grab the value from the weightTextBox and 
    // store as a number in the weight variable
    let weight = Number(weightTextBox.value);

    // grab the value from the #height text box
    // and store as a number in the height variable
    let height = Number(document.querySelector("#height").value);

    let bmi = weight / height ** 2;

    let resultDiv = document.querySelector("#results");
    resultDiv.innerHTML = `Your BMI is ${bmi}`;

})

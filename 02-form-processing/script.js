let button = document.querySelector("#submit");
button.addEventListener("click", function(){
    let firstNameTextBox = document.querySelector("#firstName");
    // the .value property is only available for
    // <input> elements
    let firstName = firstNameTextBox.value;
    console.log("First Name =", firstName);

    // 
    let email = document.querySelector("#email").value;
    console.log("Email =", email);

    // find the radio button with class 'experience' and is checked
    let selectedRb = document.querySelector(".experience:checked");
    let experience = selectedRb.value;
  
    console.log("Experience =", experience);
;
})
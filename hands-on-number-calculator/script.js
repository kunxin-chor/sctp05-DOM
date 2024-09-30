document.querySelector("#submitButton")
    .addEventListener("click", function(){

        let checkedBoxes = document.querySelectorAll(".number:checked");
        let total = 0;
        for (let c of checkedBoxes) {
            total = total + Number(c.value);
        }
        alert(total);
    })
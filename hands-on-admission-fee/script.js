document.querySelector("#submitButton")
    .addEventListener("click", function(){
        // get the checked radio button which has the class `dayType`
        // i.e find out if the user has checked weekday or weekend
        let checkedRb = document.querySelector(".dayType:checked");

        let dayType = checkedRb.value;

        let numberOfPeople = Number(document.querySelector("#people").value);
    
        let admissionFee = null;
        if (dayType == "weekday") {
            admissionFee = 7 * numberOfPeople;
        } else {
            admissionFee = 15 * numberOfPeople;
        }

        // alert("Total fee to pay " + admissionFee);
        document.querySelector("#results")
            .innerHTML = `<h1>You need to pay ${admissionFee}</h1>`

    })
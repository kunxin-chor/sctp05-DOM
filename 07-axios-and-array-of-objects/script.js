window.addEventListener("DOMContentLoaded", async function(){
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/foods.json";
    let response = await axios.get(url);
    
    let foodListElement = document.querySelector("#food-list");
    for (let foodItem of response.data) {
        let liElement = document.createElement("li");

        liElement.innerHTML = `${foodItem.food_name} (${foodItem.calories} calories)`;
        foodListElement.appendChild(liElement);
    }
})
window.addEventListener("DOMContentLoaded", async function(){
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";
    let response = await axios.get(url);
    
    let userListElement = document.querySelector("#user-list");
    for (let user of response.data.users) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `${user.firstName} ${user.lastName}, Phone: ${user.phoneNumber}, Email: ${user.emailAddress}`
        
        userListElement.appendChild(liElement);
    }

})
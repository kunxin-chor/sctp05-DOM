window.addEventListener("DOMContentLoaded", async function(){
    let response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json");
    let contentElement = document.querySelector('#content');
    let user = response.data;
    console.log(user);
   
    contentElement.innerHTML = `
     <ul>
       <li>Name:${user.Name}</li>
       <li>Mobile:${user.Mobile}</li>
       <li>Current Address:${user.Address["current Address"]}</li>
       <li>Permanet Address:${user.Address["Permanent address"]}</li>
     </ul>
    `
})
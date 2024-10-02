window.addEventListener("DOMContentLoaded", function(){
    
    // Use AJAX (Asynchronous JavaScript and XML) to load the data.json in the background without the page refreshing
    document.querySelector("#load").addEventListener("click", async function(){
        let response = await axios.get("data.json"); // fetch the content of data.json over the Internet
        console.log(response.data);
        let html = `
            <h1>${response.data.name}</h1>
            <h2>Price: ${response.data.price}</h2>
            <h2>Sold by: ${response.data.vendor.name}</h2>
        `
        document.querySelector("#product").innerHTML = html;
    })
    
   
})
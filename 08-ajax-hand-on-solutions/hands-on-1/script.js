// async function loadData() {
//     let response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
//     console.log(response.data);
//     document.querySelector("#content").innerHTML = response.data;
// }
// loadData();

// alternatively: we can call an async function that does the axios.get
// when the DOM is ready (using DOMContentLoaded event)
window.addEventListener("DOMContentLoaded", async function(){
    let response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
    console.log(response.data);
    document.querySelector("#content").innerHTML = response.data;
});
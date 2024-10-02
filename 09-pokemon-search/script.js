window.addEventListener("DOMContentLoaded", async function(){
  document.querySelector("#searchButton")
    .addEventListener("click", async function(){
       let searchTerms = document.querySelector("#search-terms").value;
       let result = await loadData(searchTerms);
       let resultDiv = document.querySelector("#results");
       resultDiv.innerHTML = `
        <h1>${result.name}</h1>
        <img src='${result.sprites.other.dream_world.front_default}'/>
       `
    })
})

async function loadData(searchTerms) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerms}`);
    return response.data;
}
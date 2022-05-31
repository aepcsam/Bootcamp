let searchButton = document.getElementById('search');
let contentEl = document.getElementById('content');
let searchQuery = '';
let searchForm = document.querySelector('form');


// Search Result

searchForm.addEventListener("submit", function(e){
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  console.log(searchQuery);
  sendApiRequest();
});



// APi Fetch


async function sendApiRequest(){
  let ApiId= `d2278be5`;
  let ApiKey =`4ff7bb5ec235ce5c5b73780857967ef8`;
  let response = await fetch(`https://api.edamam.com/search?app_id=${ApiId}&app_key=${ApiKey}&q=${searchQuery}`);
  let data = await response.json();
  console.log(data);
  useApiData(data.hits);  
};

// Api Data Fetch

function useApiData(results){
  let cards = "";
 results.forEach(result => {
 cards +=`
    <div class="card d-flex flex-auto" style="width: 18rem;">
    <img src="${result.recipe.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${result.recipe.label}</h5>
      <p class="card-text">Diet label : ${result.recipe.dietLabels}</p>
      <p class="card-text">Calories: ${result.recipe.calories.toFixed(2)}</p>
      <a href="${result.recipe.url}" class="btn btn-primary">Go ${result.recipe.source}</a>
    </div>
    </div>
  `;
});
contentEl.innerHTML = cards;

    

 
}
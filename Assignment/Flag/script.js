


async function fetchCountry(){
  let url =await fetch(`https://restcountries.com/v2/all`);
  
  let data = await url.json();
  // console.log(data);
  // console.log(data.length);

  displayCountry(data);
// 
}



fetchCountry();

const displayCountry = (data) => {
  // console.log(data[0]);
  // console.log(data.length);
  data.forEach((country) => {
    // console.log(country);
    // console.log(country.name);
    // console.log(country.flag);
    
    const div = document.createElement("div");
    // console.log(div);
    div.className = "card";
    div.style.width = "200px";
    div.innerHTML = `
        <div class="card-body">
          <h2 class="card-text">${country.name}</h2>
          <img src="${country.flag}" class="card-img-top" alt="...">
          <p >Capital : <span id="green"> ${country.capital}</span></p>
          <p>Country Code : ${country.callingCodes[0]}</p>
          <p>Region : ${country.region}</p>
          <p>Lat,Long : ${country.latlng}</p>
        </div>`;
    result.appendChild(div);
  });
};












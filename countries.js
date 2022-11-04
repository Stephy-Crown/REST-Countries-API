const countriesCountainer = document.getElementById('section');

const searchInput=document.getElementById('search');
 searchInput.addEventListener('keyup',(e)=>{
  const searchText=e.target.value;
  console.log(searchText);
  
 })


let response;
const fetchCountries = async (country) => {
  response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let [resObj] = await response.json();
  console.log(resObj);

  let article = '';
  article += `

              <div class="shadow rounded-xl dark:bg-slate-700">
                
                <img src="${
    resObj.flags.png
  }" class='h-full w-full'/>
                
                <div class="rounded-b-lg">
                  <h3>${
    resObj.name.common
  }</h3>
                  <h4>Population:${
    resObj.population
  }</h4>
                  <h4>Region:${
    resObj.region
  }</h4>
                  <h4>${
    resObj.capital
  }</h4>
                </div>
              </div>
        
              `;
  countriesCountainer.innerHTML += article;
  // countriesCountainer.style.opacity =1;

};

const showCountries = ()=>{

fetchCountries('Germany');
fetchCountries('usa');
fetchCountries('brazil');
fetchCountries('iceland');
fetchCountries('ghana');
fetchCountries('Åland island');
fetchCountries('albania');
fetchCountries('algeria');
 
}
 showCountries();


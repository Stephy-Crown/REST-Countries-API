// ONLOAD EVENT
const countriesCountainer = document.getElementById('section');

 
//  {
//   let value=e.target.value;

//   if( value && value.trim().length>0){
//     value=value.trim().toLowerCase();
//   }else{}
//  });
//  searchCountries(e){
//   const country=de
//  }
// document.getElementById('search').addEventListener('input',(e)=>{
//   let value=e.target.value;
// });



const getCountries = async function (country) {
  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);


  // console.log(response)

  // Destructure the array
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
}


// // const getJSON= function(url,errorMsg='Something went wrong')
// // {
// //   return fetch(url).then(response =>{
// //     if(!response.ok)throw new Error(`${errorMsg}(${response.status})`);

// //     return response.json();
// //   })

// // }

getCountries('Germany');
getCountries('usa');
getCountries('brazil');
getCountries('iceland');
getCountries('ghana');
getCountries('Åland island');
getCountries('albania');
getCountries('algeria');

const countriesCountainer=document.querySelector('.countries');

const getJSON =function(url, errorMsg='Something went wrong'){
return fetch(url).then(response=>{
  if(!response.ok)throw new Error (`${errorMsg} (${response.status})`);
  return response.json();
})
}


const get8Countries =async function(c1,c2,c3,c4,c5,c6,c7,c8){
  try{
    const data= await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
      getJSON(`https://restcountries.com/v3.1/name/${c4}`),
      getJSON(`https://restcountries.com/v3.1/name/${c5}`),
      getJSON(`https://restcountries.com/v3.1/name/${c6}`),
      getJSON(`https://restcountries.com/v3.1/name/${c7}`),
      getJSON(`https://restcountries.com/v3.1/name/${c8}`),
    ]);
    
    console.log((data).map(d=>d[0].capital));
    let article='';
 article +=`
              
<article><div class="shadow  dark:bg-slate-700">
                <img class="country-flag"  src="${dataArray.flags.svg}"/>
                <div>
                  <h3>${dataArray.name.common}</h3>
                  <h4>Population:${dataArray.population}</h4>
                  <h4>Region:${dataArray.region}</h4>
                  <h4>${dataArray.capital}</h4>
                </div>
              </div>
              </article>

              `;
 countriesCountainer.innerHTML=article;

  }catch(error){
    console.log(error)

  }

}
get8Countries('portugal','usa','brazil','india','iceland', 'germany','nigeria', 'japan')
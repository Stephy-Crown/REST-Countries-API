const countriesCountainer = document.getElementById("section");

const searchBar = document.getElementById("search");

let resArrayoFCountriesObjs = [];

const options = document.querySelectorAll(".option");
const selectText = document.querySelector(".option-text");

options.forEach((option) => {
  console.log(option);

  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;

    console.log(selectedOption);
    selectText.innerText = selectedOption;

    const filteredRegion = resArrayoFCountriesObjs.filter((country) => {
      return country.region.includes(selectedOption);
    });
    console.log(filteredRegion);
    showCountries(filteredRegion);
  });
});

searchBar.addEventListener("keyup", (e) => {
  // console.log(e)

  // Get the value of the input by user and then store in a variable
  // console.log(e.target.value);
  const searchString = e.target.value;

  // convert all letters inputted by user to lowercase alphabets
  searchString.toLowerCase();

  console.log(searchString);

  // if searchString is H->h
  // if searchString is h->h
  // convert name to lowercase and compare

  // Call FILTER method on the resArrayofobjs and iterate through each of the country then return the name that matches our users input
  const filteredcountries = resArrayoFCountriesObjs.filter((country) => {
    return country.name.common.toLowerCase().includes(searchString);
  });
  console.log(filteredcountries);
  showCountries(filteredcountries);
});

const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    // console.log(response)
    resArrayoFCountriesObjs = await response.json();
    // console.log(resArrayoFCountriesObjs);
    showCountries(resArrayoFCountriesObjs);
  } catch (err) {
    console.log(err);
  }
};

const showCountries = (countries) => {
  // taking the list of countries(array of objs in this case map through ie for each country obj we will convert it to this htmlString template and render to th page)
  const htmlString = countries
    .map((country) => {
      return `
    <div class="shadow-lg dark:bg-slate-700 bg-white rounded-lg h-[150px] mb-[50px] md:mb-[50px] dark:text-white">
                
    <img src="${country.flags.png}" class='w-full h-full rounded-tl-[20px]'/>
    
      <h3 class='text-black'>${country.name.common}</h3>
      <h4 class='text-gray-700'>Population:<span>${country.population}</span></h4>
      <h4 class='text-gray-700'>Region:${country.region}</h4>
      <h4>${country.capital}</h4>
    
  </div>
    `;
    })
    .join("");
  countriesCountainer.innerHTML = htmlString;
};
fetchCountries();

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
  const searchString = e.target.value.toLowerCase();

  // convert all letters inputted by user to lowercase alphabets

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

  let htmlString = countries
    .map((country) => {
      return `
    <div class="shadow-lg dark:bg-slate-700 bg-white mb-[50px] md:mb-[50px] dark:text-white rounded-[10px]">
                
    <img src="${country.flags.png}" class='md:w-[300px] w-full md:h-56 h-full rounded-t-[10px]'/>
    <div class='pt-[20px] pl-[10px] '>
      <h1 class="text-[20px] pb-[20px] font-bold">${country.name.common}</h1>
      <p class='text-[15px] font-semibold'>Population:
      <span class='pl-[2px] font-light'>${country.population}</span></p>

      <p class='font-semibold'>Region:
      <span class=' font-light pl-[2px]'>${country.region}</span>
      </p>

      <p class='pb-[80px] font-semibold'> Capital:
      <span class='font-light pl-[2px]'>${country.capital}</span>
      </p>
</div>
  </div>
    `;
    })
    .join("");
  countriesCountainer.innerHTML = htmlString;
};
fetchCountries();

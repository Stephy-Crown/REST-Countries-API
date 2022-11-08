const countriesCountainer = document.getElementById("section");

const dropDown = document.getElementsByClassName("dropdown");
// oneCountry.addEventListener("click");

const searchBar = document.getElementById("search");

let resArrayoFCountriesObjs = [];
console.log(resArrayoFCountriesObjs);

// This is the classname for the <li> list items
// Queryselectorall is like putting all list items, grabboing them and putting them in an array
const options = document.querySelectorAll(".option");

// this is the class name for each span for the names of countries
const selectText = document.querySelector(".option-text");

options.forEach((option) => {
  // OPTION passed in the call back fn is each item in the array of OPTIONS
  // this hows each item which of the List,looping through each one::::At ecah iteration through EACH list item,it will execute this call back fn
  console.log(option);

  option.addEventListener("click", () => {
    // Grab the EACH li item and grab the span and the innerText and store in a variable
    let selectedOption = option.querySelector(".option-text").innerText;
    // (selectedOption::this is the span)
    console.log(option.querySelector(".option-text"));
    // (selectedOption::this is the span).innerText==>grabbing the text in the span
    console.log(option.querySelector(".option-text").innerText);
    // change the innertext of each span name to the selected

    // we are then setting the 'text' inside option-text to the selected option we CLICK upon
    selectText.innerText = selectedOption;

    // console.log(selectText.innerText);
    console.log(selectedOption);

    // dropDown.style.display = "none";
    // options.style.opacity = 0

    const filteredRegion = resArrayoFCountriesObjs.filter((country) => {
      console.log(country.region.includes(selectedOption));
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
<a href='Details.html'>
    <div class="shadow-md hover:shadow-[0_1px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transform transition duration-500 hover:scale-105 w-full dark:bg-darkModeElements bg-lightModeElements mb-[50px] md:mb-[50px]  rounded-[10px] dark:rounded-[10px]">
                
    <img src="${country.flags.png}" class='w-full md:h-56 h-full rounded-t-[10px]'/>
    <div class='pt-[20px] pl-[10px] dark:bg-darkModeElements'>
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
  </a>
    `;
    })
    .join("");
  countriesCountainer.innerHTML = htmlString;
};
fetchCountries();

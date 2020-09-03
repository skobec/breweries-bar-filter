// Import stylesheets
import "./style.css";
import { getBreweriesByName, mockBreweries, baseURL } from "./breweriesAPI";
import { debounce } from "./debounce";


const _ = require('lodash');
const breweriesList = document.getElementById("breweries-list");
const breweryInput = document.getElementById("brewery-name");

const renderBreweriesList = (breweries = mockBreweries) => {
  // TODO: Написать функцию, которая заполнит список пивоварен
  // можно использовать mockBreweries в качестве ориентира

let request = new XMLHttpRequest();
request.open('GET', baseURL, false);
request.send();
return JSON.parse(request.responseText)
};

const index = ""
const render_lists = (e) => {
  const li = "";
  for(index in e){
    li += "<li>" + e[index].name + "</li>";
  }
  breweriesList.innerHTML = li;
}

render_lists(renderBreweriesList());

// TODO: при вводе имени запрашивать список пивоварен по имени
const handleBreweryNameInput = e => {
const keyword = breweryInput.value.toLowerCase();
const filter_bars = renderBreweriesList().filter(user => {
        user = user.name.toLowerCase();
       return user.indexOf(keyword) > -1; 
  });
  if (breweryInput.value.length >= 1) {
  breweriesList.style.display="block"
} else {
  breweriesList.style.display="none"
}
  render_lists(filter_bars);
}


// TODO: убрать лишние запросы(debounce)*
// const debouncedHandleBreweryNameInput = debounce(handleBreweryNameInput, 3000);
breweryInput.addEventListener("keyup", _.debounce(handleBreweryNameInput, 400));
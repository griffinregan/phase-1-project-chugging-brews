document.addEventListener('DOMContentLoaded', () =>
{return fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(data => renderBreweries(data));
})

const brewList = document.getElementById('breweries-list')

function renderBreweries(breweries) {
  breweries.forEach(brewery => {
    let addSpan = document.createElement('span')
    addSpan.innerText = brewery.name
  });
}
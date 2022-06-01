document.addEventListener('DOMContentLoaded', () =>
{return fetch('https://api.openbrewerydb.org/breweries')
  .then(response => response.json())
  .then(data => renderBreweries(data));
})

const brewList = document.getElementById('breweries-list')
const brewName = document.getElementById('brewery-name')
const brewCity = document.getElementById('brewery-city')
const brewState = document.getElementById('brewery-state')
const newBrewForm = document.getElementById('new-brewery')
const newBrewName = document.getElementById('new-name')


const brewPic = document.getElementById('image')

function renderBreweries(breweries) {
  breweries.forEach(brewery => {
    let brewSpan = document.createElement('span')
    brewSpan.innerText = brewery.name

    brewSpan.addEventListener('click', (e) => {
        brewName.innerText = brewery.name
        brewCity.innerText = brewery.city
        brewState.innerText = brewery.state
      })
  });
  
  newBrewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newBrewSpan = document.createElement('span')
    newBrewSpan.innerText = newBrewName.value

    brewList.append(newBrewSpan)
  })
}
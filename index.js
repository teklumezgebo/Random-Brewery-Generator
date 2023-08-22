const container = document.getElementById('list')
const refreshButton = document.getElementById('refresh')

function createName (nameOfBrewery) {
  const nameElement = document.createElement("p")
  nameElement.id = 'name'
  nameElement.innerText = nameOfBrewery
  nameElement.style.fontWeight = "bold"
  nameElement.style.color = "purple"
  container.appendChild(nameElement)
}

function createStreet (streetName) {
  const streetElement = document.createElement("p")
  streetElement.id = 'street'
  streetElement.innerText = streetName
  container.appendChild(streetElement)
}

function createCity (cityName) {
  const cityElement = document.createElement("p")
  cityElement.id = 'city'
  cityElement.innerText = cityName
  container.appendChild(cityElement)
}

function createState (stateName) {
  const stateElement = document.createElement("p")
  stateElement.id = 'state'
  stateElement.innerText = stateName
  container.appendChild(stateElement)
}

function createWebsite (websiteName) {
  const websiteElement = document.createElement("button")
  websiteElement.id ='website-btn'

  websiteElement.addEventListener("click", () => {
    window.open(`${websiteName}`, '_blank')
      
  })

  websiteElement.innerText = 'Website'
  container.appendChild(websiteElement)
}

function removeElements() {
  const p =  document.querySelectorAll('p')
  const buttons = document.querySelectorAll('button')

  p.forEach(p => {
    p.remove()
  })

  buttons.forEach(button => {
    if (button.id !== 'refresh') {
      button.remove()
    }
  })
}

function fetchBreweries() {
  const timestamp = new Date().getTime()
  fetch(`https://api.openbrewerydb.org/breweries/random?size=5timestamp=${timestamp}`)
      .then(response => response.json())
      .then((data) => {
          data.forEach(element => {
              const name = element.name
              const street = element.street
              const city = element.city
              const state = element.state
              const website = element.website_url

              createName(name)
              createStreet(street)
              createCity(city)
              createState(state)
              createWebsite(website)

          });
      })
}

function alertUser() {
  alert("Copied!")
}



refreshButton.addEventListener('click', fetchBreweries)
refreshButton.addEventListener('click', removeElements)
document.addEventListener('DOMContentLoaded', fetchBreweries)
document.addEventListener("copy", alertUser)






function breweryList() {
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

                const container = document.getElementById('list')

                const nameElement = document.createElement("p")
                nameElement.id = 'name'
                nameElement.innerText = name
                nameElement.style.fontWeight = "bold"
                nameElement.style.color = "purple"
                container.appendChild(nameElement)

                const streetElement = document.createElement("p")
                streetElement.id = 'street'
                streetElement.innerText = street
                container.appendChild(streetElement)

                const cityElement = document.createElement("p")
                cityElement.id = 'city'
                cityElement.innerText = city
                container.appendChild(cityElement)

                const stateElement = document.createElement("p")
                stateElement.id = 'state'
                stateElement.innerText = state
                container.appendChild(stateElement)

                const websiteElement = document.createElement("button")
                websiteElement.id ='website-btn'
                websiteElement.addEventListener("click", () => {
                  window.open(`${website}`, '_blank')
                })
                websiteElement.innerText = 'Website'
                container.appendChild(websiteElement)
            });
        })
}

function listRefresh() {
  const timestamp = new Date().getTime()
  fetch(`https://api.openbrewerydb.org/breweries/random?size=1timestamp=${timestamp}`)
        .then(response => response.json())
        .then((data) => {
          data.forEach(element => {
            const name = element.name
            const street = element.street
            const city = element.city
            const state = element.state
            const website = element.website_url

            // const names = document.getElementById('name')
            // const streets = document.getElementById('street')
            // const cities = document.getElementById('city')
            // const states= document.getElementById('state')
            // const websites = document.getElementById('website-btn')

            const elements = container.querySlector(`[data-]`)

          })
        })
}


const refreshButton = document.getElementById('refresh')

refreshButton.addEventListener('click', listRefresh)

document.addEventListener('DOMContentLoaded', breweryList)

function alertUser() {
  alert("Copied!")
}

document.addEventListener("copy", alertUser)


function breweryList() {
    const timestamp = new Date().getTime()
    fetch(`https://api.openbrewerydb.org/breweries/random?size=5timestamp=${timestamp}`)
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
                let name = element.name
                let street = element.street
                let city = element.city
                let state = element.state
                let website = element.website_url

                let container = document.getElementById('list')

                let nameElement = document.createElement("p")
                nameElement.innerText = name
                nameElement.style.fontWeight = "bold"
                nameElement.style.color = "purple"
                container.appendChild(nameElement)

                let streetElement = document.createElement("p")
                streetElement.innerText = street
                container.appendChild(streetElement)

                let cityElement = document.createElement("p")
                cityElement.innerText = city
                container.appendChild(cityElement)

                let stateElement = document.createElement("p")
                stateElement.innerText = state
                container.appendChild(stateElement)

                let websiteElement = document.createElement("a")
                websiteElement.href = `${website}`
                websiteElement.innerText = website
                container.appendChild(websiteElement)
            });
        })
}

// Event listeners

function redirctLink(event){
    if (event.target.tagName === "A") {
      event.preventDefault();
      window.open(event.target.href, "_blank")
    }
  }

  function alertUser() {
    alert("Copied!")
  }

document.addEventListener("click", redirctLink)

document.addEventListener('window.onload', breweryList())

document.addEventListener("copy", alertUser)


// API link: "https://api.openbrewerydb.org/breweries/random?size=5"

/* For array iteration I will use the .filter() method to extract elements relevant to the data I want to display to the user. */

/* Event listener ideas:
Button that allows for refresh of current page. ("click")
Color change on mouse over, white -> blue. https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event ("mouseover")
A message pops up from the brower to notify the user that the copied item was copied. https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event ("copy")
*/ 

fetch('https://api.openbrewerydb.org/breweries/random?size=5')
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
                let name = element.name
                let street = element.street
                let city = element.city
                let website = element.website_url

                let container = document.createElement("div")
                container.setAttribute('id', 'container')
                container.setAttribute('class', 'container')

                let nameElement = document.createElement("p")
                nameElement.innerText = name
                container.appendChild(nameElement)

                let streetElement = document.createElement("p")
                streetElement.innerText = street
                container.appendChild(streetElement)

                let cityElement = document.createElement("p")
                cityElement.innerText = city
                container.appendChild(cityElement)

                let websiteElement = document.createElement("p")
                websiteElement.innerText = website
                container.appendChild(websiteElement)

                document.body.appendChild(container)
            });
        })

    

// Event listeners


const colorChange = document.getElementById('container')

colorChange.addEventListener("mouseenter", (event) => {
    event.target.style.color = "purple"

    setTimeout(() => {
        event.target.style.color = ""
}, 500)
}, false)


colorChange.addEventListener("mouseover", (event) => { 
    event.target.style.color = "orange";
  
    
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  }, false);
  

let button = document.getElementById('btn')
button.addEventListener('click', function (){
    window.location.reload()
    return false
})


document.addEventListener("copy", function() {
  alert("Text copied!");
});


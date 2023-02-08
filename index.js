// API link: "https://api.openbrewerydb.org/breweries/random?size=5"

/* For array iteration I will use the .filter() method to extract elements relevant to the data I want to display to the user. */

/* Event listener ideas:
Button that allows for refresh of current page. ("click")
Color change on mouse over, white -> blue. https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event ("mouseover")
A message pops up from the brower to notify the user that the copied item was copied. https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event ("copy")
*/ 

let breweries = {
    getBrewery: function () {
        fetch('https://api.openbrewerydb.org/breweries/random?size=5')
        .then(res => res.json())
        .then((data) => this.showBrewery(data))
    },
    showBrewery: function(data) {
        const newArry = Object.keys(data)
        .filter((key) => key.includes("name", "street", "city", "state"))
        .reduce((obj, key) => {
            return Object.assign (obj, { 
                [key]: data[key]
                })
        }, {})
    }

   

}

// Event listeners
const test = document.getElementById('first')

test.addEventListener("mouseenter", (event) => {
    event.target.style.color = "purple"

    setTimeout(() => {
        event.target.style.color = ""
}, 500)
}, false)


test.addEventListener("mouseover", (event) => { 
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



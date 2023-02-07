// API link: "https://api.openbrewerydb.org/breweries/random?size=5"

/* For array iteration I will use the .filter() method to extract elements relevant to the data I want to display to the user. */

/* Event listener ideas:
Button that allows for refresh of current page. ("click")
Color change on mouse over, white -> blue. https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event ("mouseover")
A message pops up from the brower to notify the user that the copied item was copied. https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event ("copy")
*/ 

let 

fetch('https://api.openbrewerydb.org/breweries/random?size=5')
.then(res => res.json())
.then(function(data) {
    data.filter(element => {
        
    });
})


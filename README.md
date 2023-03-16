# Five Random Breweries 

This is a single page web app that shows the user 5 random breweries with the option to refresh the list. With each brewery comes it's: name, address, city, state, and website.

## Methodology

This web app uses that forEach method to create and render dom elements that show the api data as mentioned above. The api data is fetched from Open Brewery DB (https://www.openbrewerydb.org/). On each refresh of the list the dom elements are deleted and replaced simultaneously due to the buttons click event calling 2 different functions; one that deletes all of the p elements storing the data on screen and one that creates new p elements with new data from the api

## Event Listeners 

The 'click', 'DOMContentLoaded', and 'copy' events were added to the html document. There are multiple 'click' events on this webpage with the most important ones being the one that refreshs the list and fetchs new api data simultaneously. Theres one other 'click' event that will redirect the user to a new page when they click on the button that opens leads to the brewery's website in a new tab. This was put in place in order to let the user stay on the webpage and not have to redirect back to the web app. A 'copy event was added in order to notify the user using alert() that whatever they may have copied was added to their clipboard. This give reasureance to users that the info from the brewery was indeed copied, which would be useful for grabbing and address or name of the brewery. The 'DOMContentLoaded' event is used in order to call the fetchBrewery function when the web app is first loaded. This was done in order to provide data right away and not make the user have to refresh the list or click another item on the page to get their first batch of breweries.  
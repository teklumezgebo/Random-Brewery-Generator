# Five Random Breweries 

This is a single page web app that shows the user 5 random breweries on each page reload. With each brewery comes it's: name, address, city, state, and website.

## Methodology

This web app uses that forEach method to create and render dom elements that show the api data as mentioned above. The api data is fetched from Open Brewery DB (https://www.openbrewerydb.org/).

## Event Listeners 

The 'click', 'window.onload', and 'copy' events were added to the html document. The 'click' event is used when the user clicks on a brewery website link to which it will redirect that link to another tab instead of opening the link in the current tab they are in. The 'window.load' event is used to diplay the elements created from the breweryList() on each refresh of the page. The 'copy' event invokes an alert message notifying the user that the text that they have copied is copied to their clipboard.
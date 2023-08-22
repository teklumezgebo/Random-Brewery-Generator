# Five Random Breweries Web App

Welcome to the **Five Random Breweries** web app! This single-page application allows users to explore a curated list of 5 random breweries. The app offers an easy-to-use interface for discovering brewery details such as their name, address, city, state, and website. Feel free to refresh the list at any time to uncover new and exciting breweries!

## How It Works

The **Five Random Breweries** web app utilizes the power of modern web technologies to provide a seamless experience:

### Methodology

Behind the scenes, the app employs the `forEach` method to dynamically generate and display DOM elements. These elements showcase brewery information sourced from the Open Brewery DB API (https://www.openbrewerydb.org/). When you refresh the list, the app swiftly updates the displayed data by simultaneously removing existing elements and adding new ones. This is achieved through two separate functions—one to clear the current data from the screen and another to fetch fresh data from the API and display it.

## Features

- View details of 5 random breweries at a glance.
- Effortlessly refresh the list to discover new breweries.
- Click on a brewery's website button to open its website in a new tab, ensuring a seamless browsing experience.
- Enjoy instant data retrieval upon loading the web app, thanks to the pre-loaded brewery information.

## Event Listeners

Several event listeners enhance the interactivity of the app:

- **Click Event:** The primary click event allows you to refresh the brewery list and fetch new data simultaneously. Experience the thrill of discovering new breweries with just a click!
- **Secondary Click Event:** Clicking on a brewery's website button redirects you to its website in a new tab. This clever feature ensures you remain within the app while exploring brewery websites.
- **Copy Event:** Whenever you copy brewery information, rest assured knowing that the app will provide a helpful alert notification. This nifty feature confirms that the copied information is now in your clipboard, making it easy to paste and share.

Cheers to discovering amazing breweries! 🍻
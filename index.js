fetch("https://api.openbrewerydb.org/breweries/search?query={search}&per_page=5")
.then(function(response) {
    console.log(response)
    return response.json
})
.then(function(json) {
     console.log(json)
})




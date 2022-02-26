function callLibrary() {

    console.log("The library has been called.");
    fetch('https://www.loc.gov/audio/?q=blues&fa=&fo=json')
        .then(response => response.json())
        .then(data => console.log(data));
    return {
        "title":"This is the title"
    }
}

callLibrary();
let baseURL = "http://numbersapi.com";
let favNumber = 7;

// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.
$.getJSON(`${baseURL}/${favNumber}/math?json`).then(data => {
    console.log(data)
});

// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let favNumbers = [7,11,300]
$.getJSON(`${baseURL}/${favNumbers}/math?json`).then(data => {
    console.log(data)
});

// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
Promise.all(
    Array.from({ length: 4 }, ()=> {
        return $.getJSON(`${baseURL}/${favNumber}/math?json`);
    })
).then(facts => {
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`));
});

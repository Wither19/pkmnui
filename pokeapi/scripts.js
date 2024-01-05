let url = "https://pokeapi.co/api/v2";
let query = "/pokemon"
let name = "/kingambit";

let ENDPOINT = url + query + name;

console.log(ENDPOINT);

let promise = fetch(ENDPOINT);

promise
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => console.log(data));

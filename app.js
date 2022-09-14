async function getJoke(categories) {
    let res = await axios.get(`https://v2.jokeapi.dev/joke/${categories}`);
    //console.log(res.data.value.joke);
    const ul = document.querySelector('#jokes');

    const newLi = document.createElement('LI');
    //console.log(res);
    //ul.append(newLi)
    if (res.data.type == "single") {
        // If type == "single", the joke only has the "joke" property
        //alert(res.data.joke);
        newLi.innerText = res.data.joke;
        newLi.innerHTML += ` <br> <b>Category:</b> ${res.data.category}`

        ul.append(newLi);
    }
    else {
        // If type == "single", the joke only has the "joke" property
        //alert(res.data.setup);
        //alert(res.data.delivery);

        newLi.innerText = ` ${res.data.setup};`
        newLi.innerHTML += ` --- ${res.data.delivery} <br> <b>Category:</b> ${res.data.category}`
        ul.append(newLi);

    }
}

// const form = document.querySelector('#searchForm');
// const first_name = document.querySelector('#first_name');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     getJoke(first_name.value);


//     first_name.value = '';

// })

const programming = document.querySelector('#programming');
const Misc = document.querySelector('#Misc');
const Pun = document.querySelector('#Pun');
const Spooky = document.querySelector('#Spooky');
const Christmas = document.querySelector('#Christmas');
const clear = document.getElementById('clear');

programming.addEventListener('click', function (e) {
    e.preventDefault();
    getJoke('programming')


})

Misc.addEventListener('click', function (e) {
    e.preventDefault();
    getJoke('Misc')


})
Pun.addEventListener('click', function (e) {
    e.preventDefault();
    getJoke('Pun')


})
Spooky.addEventListener('click', function (e) {
    e.preventDefault();
    getJoke('Spooky')


})
Christmas.addEventListener('click', function (e) {
    e.preventDefault();
    getJoke('Christmas')


})

clear.addEventListener('click', function (e) {
    e.preventDefault();
    const ul = document.getElementById('jokes');
    ul.innerHTML = '';
})

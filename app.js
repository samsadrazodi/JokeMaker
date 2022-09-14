async function getJoke(categories) {
    let res = await axios.get(`https://v2.jokeapi.dev/joke/${categories}`);
    //console.log(res.data.value.joke);
    const ul = document.querySelector('#launches');

    const newLi = document.createElement('LI');
    //console.log(res);
    //ul.append(newLi)
    if (res.data.type == "single") {
        // If type == "single", the joke only has the "joke" property
        //alert(res.data.joke);
        newLi.innerText = res.data.joke;
        ul.append(newLi);
    }
    else {
        // If type == "single", the joke only has the "joke" property
        //alert(res.data.setup);
        //alert(res.data.delivery);
        newLi.innerText = res.data.setup;
        newLi.innerHTML += ` -- ${res.data.delivery}`
        ul.append(newLi);

    }
}

const form = document.querySelector('#searchForm');
const first_name = document.querySelector('#first_name');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    getJoke(first_name.value);


    first_name.value = '';

})

let users = [];
const filterUsers = async name =>
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
        .then(res => res.json());



function debounceEvent() {

    let time = null;

    //closure
    return function (value) {
        clearTimeout(time);
        time = setTimeout(() => {
            filterUsers(value)
                .then(users => console.log(users.map(user => user.name)));
        }, 1000)
    }
}

const debounce = debounceEvent();

function handleKeyUp(event) {
    debounce(event.target.value)
}

document.querySelector('input')
    .addEventListener('keyup', handleKeyUp)
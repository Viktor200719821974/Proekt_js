const mainDiv = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let userDiv = document.getElementsByClassName('target')[0];
        for (const user of users) {
            let hDiv = document.createElement('h3');
            let buttonUser = document.createElement('a')
            hDiv.innerText = `${user.id}. ${user.name}`;
            buttonUser.innerText = 'Details';
            buttonUser.href = `user-details.html?user=${JSON.stringify(user)}`;
            userDiv.appendChild(hDiv);
            userDiv.appendChild(buttonUser);
        }
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let mainDiv = document.getElementsByClassName('target')[0];
        for (const user of users) {
            let userDiv = document.createElement('div');
            let hDiv = document.createElement('h3');
            let buttonUser = document.createElement('a')
            hDiv.innerText = `${user.id}. ${user.name}`;
            userDiv.style.width = '40%';
            userDiv.appendChild(hDiv);
            userDiv.style.border = '2px solid silver';
            userDiv.style.boxSizing = 'border-box';
            userDiv.style.padding = '20px';
            userDiv.style.marginLeft = '50px';
            userDiv.style.marginBottom = '20px';
            userDiv.style.backgroundColor = '#faedcd';
            userDiv.style.borderRadius = '10px';
            userDiv.style.textAlign = 'center';

            buttonUser.innerText = 'Details';
            buttonUser.style.border = '2px solid silver';
            buttonUser.href = `user-details.html?user=${JSON.stringify(user)}`;
            buttonUser.style.padding = '5px';
            buttonUser.style.borderRadius = '5px';
            userDiv.appendChild(buttonUser);
            mainDiv.append(userDiv);

        }

        mainDiv.style.display = 'flex';
        mainDiv.style.flexWrap = 'wrap';
        document.body.append(mainDiv);
    });

const fetch = require('node-fetch');

const getFromAPI = baseUrl => endpoint => cb =>
    fetch(`${baseUrl}${endpoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => {
            console.log(err.message)
        });


const getGithubAPI = getFromAPI('https://api.github.com');

const getGithubUsers = getGithubAPI('/users');
const getGithubRepose = getGithubAPI('/repositories');

getGithubUsers(data =>{
    console.log(data.map(user => user.login));
});

getGithubUsers(data => {
    console.log(data.map(user => user.avatar_url));
});

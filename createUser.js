const axios = require('axios')

function getListUsers() {
    axios.get('https://reqres.in/api/users')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}
module.exports = {getListUsers}
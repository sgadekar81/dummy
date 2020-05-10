const fetch = require('isomorphic-fetch')

// fetch('http://localhost:8884/createList', {
//     method: 'post',
//     body: JSON.stringify({
//         name:'Top 5 Friends',
//         layout:'lay-1',
//     }),

//     headers: {
//         'Content-Type': 'application/json'
//     },
// })

let id = '1239013078230';
fetch('http://localhost:8884/getLayout/' + id)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
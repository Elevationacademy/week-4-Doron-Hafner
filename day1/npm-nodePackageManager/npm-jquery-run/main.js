// $('div').on('click', function () {
//     $('div').css ("background-color",  "#f39c12")
// })

const urllib = require('urllib')
// const { clear } = require('console')
// urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    // console.log(response.toString())
// })
urllib.request('http://www.omdbapi.com/?apikey=18daa309&t=The Lion King' , function (err, response){
    console.log(response)
})

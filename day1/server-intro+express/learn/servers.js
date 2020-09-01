const express = require('express')
const app = express()
const path = require('path')
// //========================== spot check 1 ==========================
// app.get('/life', function (request, response) {
//     response.send("42")
// })

// //========================== spot check 2 ==========================
// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }
// app.get('/users/:userId', function (request, response) {
//     response.send(users[request.params.userId])
// })

// //========================== spot check 3 ==========================
// app.get('/details', function (request, response) {
//     let params = request.query
//     response.send(params)
//     console.log(params);
// })

//========================== spot check 4 ==========================
const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}
app.get('/books/:bookID', (req, res) => {
    let bookID = req.params.bookID
    res.send(data[bookID])
})






app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))








const port = 3000
app.listen(port, function(){
})

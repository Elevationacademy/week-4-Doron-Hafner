const express = require('express')
const app = express()
const path = require('path')

// //======================= exercise-1 =======================
// app.get('/', (req,res)=> {
//     res.send('"Server is up and running smoothly"')
// })
//======================= exercise-2 =======================
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
// app.get('/priceCheck/:name', (req,res)=> {
//     let name = req.params.name
//     let price = {price: null}
//     for (let i of store) {
//         if (i.name === name) {
//             price = {price: i.price}
//         }
//     }
//     res.send(price)
// })

// //======================= exercise-3 =======================
app.get('/priceCheck/:name', (req,res)=> {
    let name = req.params.name
    let price = {price: null}
    for (let i of store) {
        if (i.name === name) {
            price = {price: i.price}
        }
    }
    res.send(price)
})


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
// ======================= exercise-4 =======================

const port = 3000
app.listen(port, () => {})
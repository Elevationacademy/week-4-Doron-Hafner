const express = require('express')
const router = express.Router()

router.get('/sanity', function (req, res) {
    res.send('server up and running')
})

const wordCounter = {};

router.get('/word/:word', function (req, res) {
    word = req.params.word
    if (wordCounter[word]) {
        res.send({ counr: wordCounter[word] })
    } else { res.send({ count: 0 }) }
})

router.post('/word/:word', function (req, res) {
    word = req.params.word
    if (wordCounter[word]) {
        wordCounter[word]++
    } else { wordCounter.word = 1 }
    res.send({ text: `Added ${word}, currentCound:${wordCounter[word]}` })
})

router.post('/words/:sentence', function (req, res) {
    const words = req.params.sentence.split(" ")
    let count = 0
    words.forEach(w => {
        if (wordCounter[w]) {
            wordCounter[w]++
            count++
            words.splice(words.indexOf('w'), 1)
        } else {
            wordCounter.w = 1
            count++
        }
    })
    res.send({ text: `Added ${count}words, ${words.length} already exist`, currectCount:-1})
})

module.exports = router
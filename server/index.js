const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000
app.use(cors())

//     axios.get(url)
//         .then((response) => {
//             const html = response.data

//             //WEB SCRAPING USING CHEERIO
//             const $ = cheerio.load(html)
//             $('a:contains("climate")', html).each(function () {
//                 const title = $(this).text();
//                 let address = $(this).attr('href');
//                 if (address.charAt(0) === '/') {
//                     address = `${paper.base}${address}`
//                 }
//                 articles.push({
//                     source: paper.name,
//                     title,
//                     address
//                 })
//             })
//         })

//ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to StockHood API")

})
app.get('/api', (req, res) => {
    res.send("Welcome to StockHood API")
})

app.get('/api/indices', (req, res) => {
    axios.get("https://www.nseindia.com/market-data/live-market-indices")
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const indices = []

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                let address = $(this).attr('href');
                if (address.charAt(0) === '/') {
                    address = `${specificPaperBase}${address}`
                }
                indices.push({
                    source: newsId,
                    title,
                    address
                })
            })
            res.json(indices)
        }).catch(err => console.log(err.message))
})

app.get('/api/stock/:symbol', (req, res) => {
    const symbol = req.params.symbol

    axios.get(specificPaper)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificStock = []

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                let address = $(this).attr('href');
                if (address.charAt(0) === '/') {
                    address = `${specificPaperBase}${address}`
                }
                specificStock.push({
                    source: newsId,
                    title,
                    address
                })
            })
            res.json(specificStock)
        }).catch(err => console.log(err.message))
})

//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})
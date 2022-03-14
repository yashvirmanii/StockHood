const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require("cors");
const requests = require("requests")
const { StockDB } = require("./db")

const app = express();

const PORT = process.env.PORT || 5000
app.use(cors())

//ROUTES
app.get('/api', (req, res) => {
    res.send("Welcome to StockHood API")
})

app.get('/api/indices', (req, res) => {
    axios.get("https://www.moneycontrol.com/stocks/marketstats/ind_performance/index.php")
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const indices = []
            $('#mc_content > section > section > div:nth-child(1) > div > div.MT10 > div > table > tbody', html).each(function () {
                $('tr', html).each(function () {
                    const indice = $('td.PR').text()
                    const oneYearCh = $('td:nth-child(2)')
                    console.log(oneYearCh)
                })
                // const title = $(this).text()
                // let address = $(this).attr('href');
                // if (address.charAt(0) === '/') {
                //     address = `${specificPaperBase}${address}`
                // }
                // indices.push({
                //     source: newsId,
                //     title,
                //     address
                // })
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

app.get('/api/news/', (req, res) => {
    let symbol = "Adani Power"
    if (!symbol) {
        res.status(301)
    }
    let fullName = ""
    StockDB.map((e) => {
        if (e.symbol == symbol) {
            fullName = e.name
            fullName = fullName.toLowerCase()
            fullName = fullName.replaceAll(" ", "-")
        } else if (e.name == symbol) {
            fullName = symbol
            symbol = e.symbol
            fullName = fullName.toLowerCase()
            fullName = fullName.replaceAll(" ", "-")
        }
    })
    if (fullName == "" || symbol == "") res.status(301).send("Invalid Input")
    console.log(symbol)
    console.log(fullName)
    const url = `https://www.moneycontrol.com/company-notices/${fullName}/notices/${symbol}`
    axios.get(url)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            let newsUpdates = []
            let desc = []
            let pdf = []

            $('#yes-bank > ul > li > p:nth-child(4) > a:nth-child(1)').each(function (i, e) {
                const id = i
                const link = $(this).attr('href')
                const title = $(this).text()
                newsUpdates.push({
                    id,
                    link,
                    title
                })
            })
            $('#yes-bank > ul > li > p.MT2').each(function (i, e) {
                if (($(this).text()).trim().length > 10) {
                    desc.push($(this).text())
                }
            })
            $('#yes-bank > ul > li > p:nth-child(4) > a:nth-child(2)').each(function (i, e) {
                pdf.push($(this).attr('href'))
            })
            console.log(pdf)
            for (let i = 0; i < newsUpdates.length; i++) {
                let description = desc[i]
                let docs = pdf[i]
                newsUpdates[i] = {
                    ...newsUpdates[i],
                    description,
                    docs
                }
            }
            res.json(newsUpdates)
        }).catch(err => console.log(err.message))
})
app.get('/api/newUpdates/', (req, res) => {
    const url = 'https://www.moneycontrol.com/news/business/markets/'
    axios.get(url)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const newsUpdates = []

            $('#cagetory > li > h2 > a[href]').each(function (i, e) {
                const id = i
                const link = e.attribs.href
                const title = $(this).text()
                newsUpdates.push({
                    id,
                    link,
                    title
                })
            })
            let desc = []
            $('#cagetory > li > p').each(function (i, e) {
                if (($(this).text()).trim().length > 10) {
                    desc.push($(this).text())
                }
            })
            for (let i = 0; i < newsUpdates.length; i++) {
                let description = desc[i]
                newsUpdates[i] = {
                    ...newsUpdates[i],
                    description
                }
            }
            res.json(newsUpdates)
        }).catch(err => console.log(err.message))
})

app.get('/api/predictions/', (req, res) => {
    //     const url = 'https://www.moneycontrol.com/broker-research/'
    //     axios.get(url)
    //         .then((response) => {
    //             const html = response.data
    //             const $ = cheerio.load(html)
    //             let specificStock = []

    //             $('#tradenow_tblh', html).each((index, element) => {
    //                 $('tr', html).each((index, item) => {
    //                     let Trow = []
    //                     $('td', html).each((i, item) => {
    //                         Trow.push($(item));
    //                         console.log(i)
    //                     })
    //                     specificStock = Trow

    //                 })
    //                 // let address = $(this).attr('href');
    //                 // if (address.charAt(0) === '/') {
    //                 //     address = `${specificPaperBase}${address}`
    //                 // }
    //                 // specificStock.push({
    //                 //     source: newsId,
    //                 //     title,
    //                 //     address
    //                 // })
    //                 // specificStock = bb.split('\n')
    //             })
    //             console.log(specificStock[3])
    //             res.json(specificStock)
    //         }).catch(err => console.log(err.message))
})

//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})
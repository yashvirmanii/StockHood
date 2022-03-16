const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require("cors");
const { StockDB } = require("./db")

const app = express();

const PORT = process.env.PORT || 5000
app.use(cors())

//ROUTES
app.get('/api', (req, res) => {
    res.send("Welcome to StockHood API")
})

app.get('/api/stock/portfolio', (req, res) => {
    const url = "https://www.moneycontrol.com/india-investors-portfolio/"
    axios.get(url)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const extra = "https://www.moneycontrol.com"
            let hold = []
            let worth = []
            const portfolio = []

            $('#investIND > tbody > tr > td > h3 > a').each(function (i, e) {
                const investor = $(this).text()
                const id = i
                const link = e.attribs.href
                portfolio.push({
                    id,
                    link: extra.concat(link),
                    investor
                })
            })
            $('#investIND > tbody > tr > td > span > strong').each(function (i, e) {
                hold.push($(this).text())
            })
            $('#investIND > tbody > tr > td:nth-child(2)').each(function (i, e) {
                worth.push($(this).text())
            })
            for (let i = 0; i < portfolio.length; i++) {
                let holding = hold[i]
                let netWorth = worth[i]
                portfolio[i] = {
                    ...portfolio[i],
                    holding,
                    netWorth,
                }
            }
            res.json(portfolio)
        }).catch(err => console.log(err.message))
})

app.get('/api/news/:symbol', (req, res) => {
    const { symbol } = req.params;
    if (!symbol) {
        res.status(301)
    }
    let fullName = ""
    StockDB.map((e) => {
        if (e.symbol.toLowerCase() == symbol.toLowerCase()) {
            fullName = e.name
            fullName = fullName.toLowerCase()
            fullName = fullName.replaceAll(" ", "-")
        } else if (e.name.toLowerCase() == symbol.toLowerCase()) {
            fullName = symbol
            symbol = e.symbol
            fullName = fullName.toLowerCase()
            fullName = fullName.replaceAll(" ", "-")
        }
    })
    if (fullName == "" || symbol == "") res.status(301).send("Invalid Input")
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
    const url = 'https://www.moneycontrol.com/broker-research/stocks.html'
    axios.get(url)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            let predictions = []
            $('#show_broker_research_report > ul > li > div > div.Ohidden > p.MT5').each(function (i, e) {
                const id = i
                const title = $(this).text().replaceAll(":", ";").trim()
                const data = title.split(";")
                predictions.push({
                    id,
                    action: data[0],
                    target: data[1],
                    broker: data[2],
                })
            })
            res.json(predictions)
        }).catch(err => console.log(err.message))
})

//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})
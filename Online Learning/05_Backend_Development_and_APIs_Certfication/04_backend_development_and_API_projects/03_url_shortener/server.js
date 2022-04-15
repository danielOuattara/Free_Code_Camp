require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const validUrl = require("valid-url");
const shortid = require("shortid");
const app = express();

const MONGO_URI = process.env.MONGO_URI;
// Basic Configuration
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection to MongoDB: Success !');
        app.listen(port, function () {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => console.log(err.message));


const Schema = mongoose.Schema;

const urlSchema = new Schema({
    original_url: String,
    short_url: String
}, {
    timestamps: true
});

const Url = mongoose.model("Url", urlSchema);


app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
    res.json({
        greeting: 'hello API'
    });
});


app.post("/api/shorturl/", async (req, res) => {
    try {

        if (validUrl.isWebUri(req.body.url) === undefined) { // url is valid ?
            // return res.status(400).json({"error":"Invalid URL"}); // no pass last test
            return res.json({
                "error": "Invalid URL"
            }); // validate all test
        }

        let _url = await Url.findOne({
            original_url: req.body.url
        });
        if (_url) { // url exist in DB, just return it !
            return res.json({
                original_url: _url.original_url,
                short_url: _url.short_url
            });

        } else { // url doesn't exist,
            const urlShort = shortid.generate(); // generate short url
            _url = new Url({
                original_url: req.body.url,
                short_url: urlShort
            })
            await _url.save();
            return res.json(_url);
        }

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


app.get("/api/shorturl/:short_url?", async (req, res) => {
    try {
        const urlParams = await Url.findOne({
            short_url: req.params.short_url
        })
        if (urlParams) {
            return res.status(302).redirect(urlParams.original_url);

        } else {
            return res.status(404).json({
                error: "invalid url"
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

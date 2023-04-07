require("dotenv").config();
import express from "express";
import cors from "cors";
import axios from "axios";
const fetch = require('node-fetch');
const rateLimiter = require('express-rate-limit');



const app = express();
app.use(cors({ origin: ['http://localhost:5173','http://localhost:3000'], credentials: true }));
const port = 3000;



const limiter = rateLimiter({

    windowMs: 1000,
    max: 1,
});
app.use(limiter);




// EXPRESS MIDDLEWARE API ROUTES
app.get('/api/LastPlayed/:id_profile', cors(), (req, res, next) => {

    const options = {
        method: "GET",
        url: `https://api.cognicenter.com.br/Atividades.php?educacao=1&target=getLastPlayed&id_profile=${req.params.id_profile}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }
    
    axios
    .request(options)
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        res.json(err);
    })

    next();
});





app.listen(port)
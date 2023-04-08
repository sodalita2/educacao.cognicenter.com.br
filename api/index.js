require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
//const rateLimiter = require('express-rate-limit');



const app = express();
app.use(cors({ origin: ['http://localhost:5173','http://localhost:3000','https://educacao.cognicenter.com.br'], credentials: true }));
const port = process.env.VITE_PORT || 3000;


/*
const limiter = rateLimiter({

    windowMs: 1000,
    max: 1,
});
app.use(limiter);
*/



// EXPRESS MIDDLEWARE API ROUTES
app.get('/api/LastPlayed/:id_profile', cors(), (req, res) => {

    const options = {
        method: "GET",
        url: `https://api.cognicenter.com.br/Atividades.php?educacao=1&target=getLastPlayed&id_profile=${req.params.id_profile}`
    }
    
    axios
    .request(options)
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        res.json(err);
    })

});





app.listen(port)
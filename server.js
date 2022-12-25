import path from "path";

const express = require('express');
const app = express();

app.get('/',(req, res) => res.send ('Hello world with express!'))



app.listen(8080);
console.log('Server on port 8080')

//Routes route
app.get('/', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'index.html'))
})
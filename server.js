const express = require("express");
const app = express();

//routes
app.get('/', (req, res) =>{
    res.send('Hello nigga')
})

app.listen(3000, () => {
    console.log(`listening in port: 3000`)
})
const express = require('express')
const connectddb = require('./config/connectdb')
const ContactRouter = require('./Route/contact')

const app = express();
const port = 5000;
//link db
connectddb()

app.use(express.json())
app.use('/api/user', ContactRouter)




app.listen(port, (err) => {
    err ? console.log(err) : console.log(`go to the port number ${port}`);
})
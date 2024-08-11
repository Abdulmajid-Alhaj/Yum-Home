require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectedDB = require('./db/connectedDB')
const auth = require('./routers/authRouter')
const menu = require('./routers/menuRouter')
const detail = require('./routers/detailRouter')
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/yum', auth)
app.use('/api/yum' , menu)
app.use('/api/yum', detail)

app.listen(process.env.PORT || 5000 , () => {
    connectedDB()
    console.log(`http://localhost:${process.env.PORT}`);
})
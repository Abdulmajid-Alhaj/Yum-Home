require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectedDB = require('./db/connectedDB')
const auth = require('./routers/authRouter')
const admin = require('./routers/adminRouter')
const app = express()

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))
app.use(cookieParser())

app.use('/api/yum', auth)
app.use('/api/yum', admin)

app.listen(process.env.PORT || 5000 , () => {
    connectedDB()
    console.log(`http://localhost:${process.env.PORT}`);
})
const express = require("express")
const ConnectDB = require("./config/db")
const app = express()

ConnectDB()

// testing server
app.get('/', (req, res) => {
    res.json({
        message:"server in working"
    })
})






const PORT = 3000 || 5000 || 8000

app.listen(PORT, () => {
    console.log(`server is running on PORT : ${PORT}`)
})
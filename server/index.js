const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const contactRoute = require("./routes/contacts")

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(console.log("Conectado ao banco de dados"))
.catch((err) => console.log(err))

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/contact", contactRoute);

app.listen(process.env.PORT, ()=> {
    console.log("Servidor rodando na porta espeficiada")
})

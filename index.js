const express=require("express")
const router = require("./routes")
const cookieParser=require("cookie-parser")
const app=express()
app.use(cookieParser())
app.use(router)
app.listen(3000)
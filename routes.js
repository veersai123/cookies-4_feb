const express=require("express")
const controller = require("./controller")
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("yes you can do it")
})
router.get('/set_cookie',controller.setCookie)
router.get('/get_cookie',controller.getCookie)
router.get('/delete_cookie',controller.deleteCookie)

module.exports=router
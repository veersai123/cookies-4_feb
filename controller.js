class controller{
    static setCookie=(req,res)=>{
        // res.cookie("name","deepak")
        // res.cookie("sid",123,{maxAge:10000})
        res.cookie("pass","deepak@123")
        res.cookie("sid","deepak")
        res.send("cookie send")
    }
    static getCookie=(req,res)=>{
        // console.log(req.cookies.name)
        console.log(req.cookies.sid)
        res.send("cookie get")
    }
    static deleteCookie=(req,res)=>{
        res.clearCookie("pass")
        res.send("cookie deleted")
    }
}
module.exports=controller
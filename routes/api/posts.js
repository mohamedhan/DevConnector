const express=require('express')
const router=express.Router()

//@ route get api/posts
//@ test route
//@ access public
router.get('/',(req,res)=>{
    res.send('posts route')
})
module.exports=router
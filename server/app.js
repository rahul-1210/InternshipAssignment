const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./models/user')


mongoose.connect('mongodb://localhost:27017/myapp',
 {
     useNewUrlParser: true,
     useUnifiedTopology: true
     
    })
    .then(()=>{
        console.log("connected");
    })
    .catch(err=>{
        console.log(err);
    });












app.post("/post",(req,res)=>{
    
      console.log("Connected to React");
      res.redirect("/");
})







app.listen(8080,()=>{
    console.log('Server started at port 8080');
})
const express = require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const Users=require('./model/User')
const App=express();
mongoose.connect('mongodb://localhost/diplom-magistr', { useNewUrlParser: true })
    .then(()=>console.log('Mongodb start'))
    .catch(e=>console.log(e));


App.use(bodyParser.json());
App.post('/api/user',(req,res)=>{
    const {login,password}=req.body;
     Users.create({
         name:login,
         age:password
     }).then((e)=>console.log(e)).catch(e=>console.log(e))
return res.json();
});
App.listen(4000,()=>{
    console.log('OK');
});

const express = require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const Users=require('./model/User');
const App=express();
mongoose.connect('mongodb://localhost/diplom-magistr', { useNewUrlParser: true })
    .then(()=>console.log('Mongodb start'))
    .catch(e=>console.log(e));


App.use(bodyParser.json());
App.post('/api/user',(req,res)=>{
    const {login,password,email,phone,fullname}=req.body;
     Users.create({
         login:login,
         password:password,
         email:email,
         phone:phone,
         fullname:fullname
     }).then((e)=>console.log(e)).catch(e=>console.log(e));
return res.json();
});
App.post('/api/views',(req,res)=>{
    const {login,password}=req.body;
 Users.findOne({
        login,password
    }).then(e=>{
   return res.json(e);
 });
    App.get('/users',(req,res)=>{
        Users.find().then(e=>{
            return res.json(e);
        });


    });


});
App.listen(5000,()=>{
    console.log('OK');
});

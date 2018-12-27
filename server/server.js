const express = require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');

const App=express();
mongoose.connect('mongodb://localhost/diplom-magistr', { useNewUrlParser: true })
    .then(()=>console.log('Mongodb start'))
    .catch(e=>console.log(e));

const User={
    login:'hello',
    pass:'world'
};

App.use(bodyParser.json());
App.post('/api/user',(req,res)=>{
    require('./model/User');
    const Users=mongoose.model('Users');
    const users=new Users({
        name:req.body.username,
        age:req.body.password,
        phones:[423432]
    });
    users.save().then(user=>console.log(user)).catch(e=>console.log(e));
    const login=req.body.login;
    const pass=req.body.pass;
    if(User.login===login && User.pass===pass){
        console.log('true');
        return res.json({ check:true});
    }else {
        console.log('false');
        return res.json({check:false});
    }

});
App.listen(4000,()=>{
    console.log('OK');
});

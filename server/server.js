const express = require('express');
const bodyParser=require('body-parser');
const App=express();

const User={
    login:'hello',
    pass:'world'
};

App.use(bodyParser.json());
App.post('/api/user',(req,res)=>{
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

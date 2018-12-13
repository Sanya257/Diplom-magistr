const express = require('express');
const App=express();
App.get('/api/user',(req,res)=>{
    console.log("dsadd");
    return res.json();
});
App.listen(4000,()=>{
    console.log('OK');
});
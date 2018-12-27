const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User = new Schema({
    name:{
        type: String,

    },
    age: {
        type: String,
    }
});
module.exports=mongoose.model('Users',User);
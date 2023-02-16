// mongodb connect

const mongoose = require('mongoose');
// const db=require('../errorHandling/dberrors')

mongoose.connect('mongodb+srv://ReshnaKP:reshna@cluster0.wman5mj.mongodb.net/footwear',()=>{
    // db.on('error', (error) => console.error(error))
    console.log('mongoose connected')
});
mongoose.set('strictQuery',true);


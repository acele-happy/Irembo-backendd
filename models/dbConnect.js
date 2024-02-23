const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log("failed to connect to db "+err)
})
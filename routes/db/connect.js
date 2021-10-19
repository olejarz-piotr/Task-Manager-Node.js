const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://xDOlejxD:Krakowska11@nodeexpressprojects.r2ay2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB=()=>{
   return mongoose.connect(connectionString,{useNewUrlParser:true, useCreateIndex:true, useFindAndModify:true, useUnifiedTopology:true})

}

    
module.exports=connectDB;
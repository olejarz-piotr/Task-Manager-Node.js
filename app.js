const express = require('express');
const app=express();
const tasks = require('./routes/tasks');


//midleware

app.use(express.json())

app.get('/hello',(req,res)=>{

    res.send('Task manager app')
})

app.use('/api/v1/tasks',tasks)


const port=3000;

app.listen(port, console.log(`server is running in ${port}`));
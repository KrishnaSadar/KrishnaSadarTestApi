require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');

const server=express();
const productRouter=require('./routes/product')

//connect with mong0 db
dbconnecter().catch(err=>console.log(err));
async function dbconnecter(){
    await mongoose.connect("mongodb+srv://krishnasadar786:PVOeqRNrKxMrbZql@test.gjizkou.mongodb.net/?retryWrites=true&w=majority&appName=test");
    console.log('server is connected to database');
}


//middleware

server.use(express.json());
server.use(morgan('dev'));
server.use('/',productRouter.router);

server.listen(process.env.PORT,()=>{
    console.log('server chalu zal re')
})
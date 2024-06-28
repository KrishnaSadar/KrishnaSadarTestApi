require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');

const server=express();
const productRouter=require('./routes/product')

//connect with mong0 db
dbconnecter().catch(err=>console.log(err));
async function dbconnecter(){
    await mongoose.connect(process.env.DB);
    console.log('server is connected to database');
}


//middleware

server.use(express.json());
server.use(morgan('dev'));
server.use('/products',productRouter.router);

server.listen(process.env.PORT,()=>{
    console.log('server chalu zal re')
})
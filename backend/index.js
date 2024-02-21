const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
//const createProduct=require('./controller/Product')
//const { createProduct } = require('./controller/Product');
const brandsRouter=require('./routes/Brand')

const productRouters=require('./routes/product')

main().catch(err=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://localhost:27017/ecommerce');
    console.log('database is coonected')
}
const app=express();

app.use(express.json());
app.use(cors());

app.use('/', productRouters.router);
app.use('/brands', brandsRouter.router);

app.listen(8080, ()=>{
      console.log(`server is connect ${8080}`)
})
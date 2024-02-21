const express=require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');


const router=express.Router();

router.post('/products', createProduct).get('/', fetchAllProducts).get('/', fetchProductById)
.patch('/', updateProduct)

// .get('/update/test',async(req,res)=>{
      //       // For adding discountPrice to existing data : delete this code after use
      //      const products = await Product.find({});
      //      for(let product of products){
      //       product.discountPrice = Math.round(product.price*(1-product.discountPercentage/100))
      //       await product.save()
      //       console.log(product.title+ ' updated')
      //      }
      //      res.send('ok')
      // })
exports.router=router;
import express from 'express'
import { productController } from './product.controller'

const router = express.Router()

// !Get All Product
router.get('/', productController.getAllProducts)

// !Get Single Product By Id
router.get('/:productId', productController.getSingleProduct)

// !Create Product To Database
router.post('/', productController.createProduct)

export const productRoute = router

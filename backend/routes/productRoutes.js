import express from 'express'
import * as productController from '../controllers/productController.js'

const router = express.Router()

// @desc    fetch all products
// @route   GET /api/products
// @access  public
router.get('/', productController.getProducts)

// @desc    fetch single product
// @route   GET /api/products/:id
// @access  public
router.get('/:id', productController.getProductById)

export default router

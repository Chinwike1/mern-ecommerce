import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import * as orderController from '../controllers/orderController.js'

const router = express.Router()

// @desc    create new order
// @route   POST /api/products
// @access  private
router.route('/').post(protect, orderController.addOrderItems)

export default router

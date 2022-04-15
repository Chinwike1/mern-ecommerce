import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

// fetch all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// fetch single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
)

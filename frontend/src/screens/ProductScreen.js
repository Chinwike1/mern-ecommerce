import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../features/products/productsThunk'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const {
    product = [],
    loading,
    error,
  } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [id])

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      <Link className='btn btn-light my-3' to='/'>
        <i className='fa fa-arrow-left' /> Go Back
      </Link>
      <Row>
        <Col md={6}>
          {loading ? (
            <Loader />
          ) : (
            <Image src={product.image} alt={product.name} fluid />
          )}
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews}`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Sold out'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen

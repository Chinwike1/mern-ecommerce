import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-2'>Copyright &copy; Proshop 2022</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

import { Container } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    /* 
      v6 changes
      - Route component should be wrapped with Routes component
      - component prop on Route has been replaced with element. element accepts jsx
      - Redirect component has been replaced with Navigate component
      - useLocation & useNavigate hooks available
    */
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/place-order' element={<PlaceOrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/cart/' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

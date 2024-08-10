import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FrontPage from './components/frontPage/FrontPage'
import Orders from './components/orders/Orders';
import Profile from './components/profile/Profile';
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import ProductsList from './components/products/ProductsList'
import ProductById from './components/products/ProductById'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/Products" element={<ProductsList />} />
            <Route path="/Products/:id" element={<ProductById />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

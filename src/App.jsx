import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PromotionCardControl from './components/products/promotions/PromotionCardControl' 
import FrontPage from './components/products/frontPage/FrontPage'
import NewArrivals from './components/products/newArrivals/NewArrivals'
import Orders from './components/orders/Orders';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/promotions" element={<PromotionCardControl />} />
            <Route path="/newArrivals" element={<NewArrivals />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

    
    
  )
}

export default App

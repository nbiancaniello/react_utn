import './Navigation.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from '../cart/CartProvider';
import {Link} from 'react-router-dom';

function Navigation() {
   const { totalCost } = useCart();
   return (
      <Navbar expand="lg" className=" mb-2 navigation">
         <Container className="nav-container" fluid>
            <Navbar.Brand><Link className='link' to="/">Autoservicio Miguel Angel</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
               id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel"
               placement="end"
            >
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                     Navegación
                  </Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <Nav className="justify-content-flex-start flex-grow-1 pe-3">
                     <NavDropdown title="Productos" id="offcanvasNavbarDropdown">
                        {/* <NavDropdown.Item className='dropdown-item' href="/products?filter=isPromotion">Promociones</NavDropdown.Item> */}
                        <NavDropdown.Item className='dropdown-item'><Link className='link' to="/Products?filter=isPromotion">Promociones</Link></NavDropdown.Item>
                        {/* <NavDropdown.Item href="/Products?filter=isNewArrival">Recién llegado</NavDropdown.Item> */}
                        <NavDropdown.Item><Link className='link' to="/Products?filter=isNewArrival">Recién llegado</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item href="/Products/category/aceites">Aceites</NavDropdown.Item> */}
                        <NavDropdown.Item><Link className='link' to="/Products/category/aceites">Aceites</Link></NavDropdown.Item>
                        {/* <NavDropdown.Item href="/Products/category/bebidas">Bebidas</NavDropdown.Item> */}
                        <NavDropdown.Item><Link className='link' to="/Products/category/bebidas">Bebidas</Link></NavDropdown.Item>
                        {/* <NavDropdown.Item href="/Products/category/carniceria">Carnicería</NavDropdown.Item> */}
                        <NavDropdown.Item><Link className='link' to="/Products/category/carniceria">Carnicería</Link></NavDropdown.Item>
                        {/* <NavDropdown.Item href="/Products/category/limpieza">Limpieza</NavDropdown.Item> */}
                        <NavDropdown.Item><Link className='link' to="/Products/category/limpieza">Limpieza</Link></NavDropdown.Item>
                     </NavDropdown>
                     {/* <Nav.Link href="/orders">Pedidos</Nav.Link> */}
                     <Nav.Link><Link className='link' to="/orders">Pedidos</Link></Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     <Form.Control
                        disabled
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                     />
                     <Button disabled id="search-button" /*variant="outline-success"*/>
                        <FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />
                     </Button>
                  </Form>
                  {/* <Button href="/shoppingCart" id="shop-cart" >
                     <FontAwesomeIcon size="lg" icon={faCartShopping} />${totalCost}
                  </Button>
                  <Button href="/userprofile" id="user-profile" >
                     <FontAwesomeIcon size="lg" icon={faUser} />
                  </Button> */}
                  <Link className='link' to="/shoppingCart">
                     <Button id="shop-cart" >
                        <FontAwesomeIcon size="lg" icon={faCartShopping} />${totalCost}
                     </Button>
                  </Link>
                  <Link className='link' to="/userprofile">
                     <Button id="user-profile" >
                        <FontAwesomeIcon size="lg" icon={faUser} />
                     </Button>
                  </Link>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
      </Navbar>
   );
}

export default Navigation;
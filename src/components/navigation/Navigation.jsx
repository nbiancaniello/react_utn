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

function Navigation() {
   const { totalCost } = useCart();
   return (
      <Navbar expand="sm" className=" mb-2 navigation">
         <Container className="nav-container">
            <Navbar.Brand href="/">Autoservicio Miguel Angel</Navbar.Brand>
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
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                     <NavDropdown title="Productos" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item className='dropdown-item' href="/products?filter=isPromotion">Promociones</NavDropdown.Item>
                        <NavDropdown.Item href="/products?filter=isNewArrival">Recién llegado</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products?category=oils">Aceites</NavDropdown.Item>
                        <NavDropdown.Item href="/products?category=beverages">Bebidas</NavDropdown.Item>
                        <NavDropdown.Item href="/products?category=meats">Carnicería</NavDropdown.Item>
                        <NavDropdown.Item href="/products?category=cleaning">Limpieza</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="/orders">Pedidos</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                     />
                     <Button id="search-button" /*variant="outline-success"*/>
                        <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
                     </Button>
                  </Form>
                  <Button href="/shoppingCart" id="shop-cart" /*className="mx-2" /*variant="outline-success"*/>
                     <FontAwesomeIcon size="xl" icon={faCartShopping} />${totalCost}
                  </Button>
                  <Button href="/profile" id="user-profile" /*className="mx-2" /*variant="outline-success"*/>
                     <FontAwesomeIcon size="xl" icon={faUser} />
                  </Button>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
      </Navbar>
   );
}

export default Navigation;
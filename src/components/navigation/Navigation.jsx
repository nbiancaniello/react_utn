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

function Navigation() {
   return (
      <>
         {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
               <Container fluid>
                  <Navbar.Brand href="/">Autoservicio Miguel Angel</Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                     id={`offcanvasNavbar-expand-${expand}`}
                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                     placement="end"
                  >
                     <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                           Navegación
                        </Offcanvas.Title>
                     </Offcanvas.Header>
                     <Offcanvas.Body>
                        <Nav className="justify-content-right flex-grow-1 pe-3">
                           <NavDropdown
                              title="Productos"
                              id={`offcanvasNavbarDropdown-expand-${expand}`}
                           >
                              <NavDropdown.Item href="./promotions">Promociones</NavDropdown.Item>
                              <NavDropdown.Item href="./newArrivals">Recién llegado</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action5">Bebidas</NavDropdown.Item>
                           </NavDropdown>
                           <Nav.Link href="./orders">Pedidos</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                           <Form.Control
                              type="search"
                              placeholder="Buscar"
                              className="me-2"
                              aria-label="Search"
                           />
                           <Button variant="outline-success">Buscar</Button>
                        </Form>
                     </Offcanvas.Body>
                  </Navbar.Offcanvas>
               </Container>
            </Navbar>
         ))}
      </>
   );
};

export default Navigation;
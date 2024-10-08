import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useCart } from '../cart/CartProvider';
import {Link} from 'react-router-dom';
function ShoppingCartUserDetails() {
   const[selectedOption, setSelectedOption] = useState('option-delivery');
   const { emptyCart } = useCart();
   // const [validated, setValidated] = useState(false);

   // const handleSubmit = (event) => {
   //    const form = event.currentTarget;
   //    if (form.checkValidity() === false) {
   //       event.preventDefault();
   //       event.stopPropagation();
   //    }

   //    setValidated(true);
   // };

   const handleOptionChange = (event) => {
      setSelectedOption(event.target.id);
   };

   const handleFormSubmit = () => {
      emptyCart();
   };
   

   return (
      <Form id='shopping-cart-user-details'>
         <Form.Label>Nombre</Form.Label>
         <Form.Control
            type="text"
            placeholder="Nombre"
            defaultValue="Lalo"
            readOnly
         />
         <Form.Label>Apellido</Form.Label>
         <Form.Control
            type="text"
            placeholder="Apellido"
            defaultValue="Landa"
            readOnly
         />
         <Form.Label>Email</Form.Label>
         <Form.Control
            type="email"
            placeholder="Email"
            defaultValue="lalolanda@customer.com"
            required
         />
         <Form.Label>Teléfono</Form.Label>
         <Form.Control
            type="text"
            placeholder="Nro. de Telefono"
            defaultValue="+54 9 11 5555-5555"
            required
         />
         <div key="option-delivery" className="mb-3">
            <Form.Check 
               inline
               defaultChecked
               name="option"
               type="radio"
               id="option-delivery"
               checked={selectedOption === 'option-delivery'}
               label="Enviar a Domicilio"
               onChange={handleOptionChange}
            />
            <Form.Check
               inline
               name="option"
               type="radio"
               id="option-pickup"
               checked={selectedOption === 'option-pickup'}
               label="Retiro en local"
               onChange={handleOptionChange}
            />
         </div>
         
         {selectedOption === 'option-delivery' && (
            <>
               <Form.Label>Domicilio</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Domicilio"
                  defaultValue="Avenida Siempreviva 742"
                  required
               />   
            </>
         )}
         
         <Link to="/ShoppingCartConfirmation">
              <Button id="shopping-cart-end-button" onClick={handleFormSubmit}>Finalizar Compra</Button>
          </Link>
         {/* <Button href='/ShoppingCartConfirmation' id='shopping-cart-end-button' onClick={handleFormSubmit}>Finalizar Compra</Button> */}
      </Form>
   );
} 

export default ShoppingCartUserDetails;
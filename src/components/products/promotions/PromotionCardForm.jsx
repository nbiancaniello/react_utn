import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

function PromotionCardForm(id, price, description, addProduct, deleteProduct) {
   const [editable, setEditable] = useState(false);
   const [qty, setQty] = useState(1)

   const handleClickbAddRemoveButton = () => {
      setEditable(!editable);
   };

   const handleAddClick = (event) => {
      event.preventDefault(); // Prevent default form behavior
      if (typeof addProduct === 'function') {
         addProduct(id, description, price, qty);
      } else {
         console.error('addProduct is not a function');
      }
      handleClickbAddRemoveButton();
   };

   const handleRemoveClick = (event) => {
      event.preventDefault(); // Prevent default form behavior
      if (typeof deleteProduct === 'function') {
         deleteProduct(id);
      } else {
         console.error('deleteProduct is not a function');
      }
      handleClickbAddRemoveButton();
   };

   const handleQtyChange = (event) => {
      setQty(Number(event.target.value));
   };

   return (

      <div className="promotion-card-form">
         {!editable && (
            <Button variant="success" className="promotion-card-button" onClick={handleClickbAddRemoveButton}>
               Agregar al carrito
            </Button>
         )
         }

         {editable && (
            <Form>
               <div className="promotion-card-form-group">
                  <Form.Label className="card-qty-label" htmlFor="card-qty">Cant:</Form.Label>
                  <Form.Control
                     type="number"
                     values={qty}
                     className="promotion-card-form-control"
                     id="card-qty"
                     min={1}
                     max={100}
                     onChange={handleQtyChange}
                  />
               </div>
               <div className="promotion-card-form-buttons">
                  <Button as="input" type="button" className="btn btn-success promotion-card-button" value="Agregar" onClick={handleAddClick} />
                  <Button as="input" type="button" className="btn btn-danger promotion-card-button" value="Eliminar" onClick={handleRemoveClick} />
               </div>
            </Form>)}
      </div>
   );
}

export default PromotionCardForm;
import { useState } from "react";
import { Button } from "react-bootstrap";
import CartHandler from '../cart/CartHandler';

// eslint-disable-next-line react/prop-types
function ProductForm({id, price, description, image, className}) {
   const [visible, setVisible] = useState(false);

   const handleClickbAddRemoveButton = () => {
      setVisible(!visible);
   };

   const handleVisibilityChange = () => {
      // Optionally adjust visibility or quantity based on actions
      setVisible(false); // For example, hide after add
   };

   return (

      <div className="product-card-form">
         {!visible && (
            <Button variant="none" className={className} onClick={handleClickbAddRemoveButton}>
               Agregar al carrito
            </Button>
         )
         }

         {visible && (
            <CartHandler id={id} description={description} price={price} image={image} onQuantityChange={handleVisibilityChange} />

         )}
      </div>
   );
}

export default ProductForm;
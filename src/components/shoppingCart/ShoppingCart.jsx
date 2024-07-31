import React, { useState } from 'react';
import CartList from './CartList';
import CartControl from './CartControl';
import CartForm from './CartForm';

const ShoppingCart = () => {
   const [items, setItems] = useState([]);

   const addItem = (item) => {
      setItems([...items, item]);
   };

   const removeItem = (id) => {
      setItems(items.filter(item => item.id !== id));
   };

   return (
      <div>
         <CartList items={items} onRemoveItem={removeItem} />
         <CartControl items={items} />
         <CartForm onAddItem={addItem} />
      </div>
   );
};

export default ShoppingCart;
import { useEffect, useState } from "react";
import PromotionsList from "./PromotionsList";
const PromotionCardControl = () => {
   const [products, setProducts] = useState(() => {
      try {
        const savedProducts = JSON.parse(localStorage.getItem("products"));
        return savedProducts || [];
      } catch (error) {
        console.error("Failed to parse products from localStorage:", error);
        return [];
      }
    });
  
    useEffect(() => {
      try {
        localStorage.setItem("products", JSON.stringify(products));
      } catch (error) {
        console.error("Failed to save products to localStorage:", error);
      }
    }, [products]);
   
   const addProduct = (id, description, price, qty) => {
      const newProduct = { id, description, price, qty };
      setProducts((currProducts) => [...currProducts, newProduct]);
   };

   const deleteProduct = (id) => {
      setProducts((currProducts) => currProducts.filter(product => product.id !== id));
   };

   return (
      <div>
         <PromotionsList addProduct={addProduct} deleteProduct={deleteProduct}/>
      </div>
   );
};

export default PromotionCardControl;
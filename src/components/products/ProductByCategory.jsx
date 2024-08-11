import { fetchProductsByCategory } from "../scripts/api";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import './Products.css';


function ProductByCategory() {
   const { category } = useParams();
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const products = await fetchProductsByCategory(category)
            if (products.length > 0) {
               setProducts(products);
            } else {
               setError('No hay productos para esta categoría');
            }
         } catch (err) {
            setError(err.message);
         }
      };

      fetchProduct();
   }, [category]);

   if (error) {
      return <p>Error: {error}</p>;
   }
   if (!products.length === 0) {
      return <p>Loading...</p>;
   }

   return (
      <div className='products-list'>
         <h1 className="products-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
         <Container>
            {/* <Row xs sm={2} md={3} lg={4} xl={6} xxl={12}> */}
            <Row>
               {products.map((product) => (
                  <ProductCard
                     key={product.id}
                     id={product.id}
                     price={product.price}
                     description={product.description}
                     image={`/products/img/${product.image}`}
                     className={"product-card-add-button"}
                     promotionPrice={product.promotionPrice}
                  />
               ))
               }
            </Row>
         </Container>
      </div>
   );
}

export default ProductByCategory;
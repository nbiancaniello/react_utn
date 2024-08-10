import './Products.css';
import ProductCard from './ProductCard';
import { Container, Row } from 'react-bootstrap';
import { fetchProducts } from "../scripts/api";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductsList({ filter: propFilter }) {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const location = useLocation();

   ProductsList.propTypes = {
      filter: PropTypes.string,
   };
   const getFilter = () => {
      return propFilter || new URLSearchParams(location.search).get('filter') || null;
   };
   
   useEffect(() => {
      const fetchFilteredProducts = async () => {
         const filter = getFilter();
         try {
            const data = await fetchProducts(filter);
            if (data && data.products) {
               setProducts(data.products);
               setLoading(false);

            }
         } catch (error) {
            console.error('Failed to fetch products:', error);
         }
      };

      fetchFilteredProducts();
   }, [getFilter, location.search, propFilter]);

   return (
      <div className='products-list'>
         <h1 className="products-title">{getFilter() === "isNewArrival" ? "Nuevos Ingresos" : "Promociones"}</h1>
         <Container>
            {/* <Row xs sm={2} md={3} lg={4} xl={6} xxl={12}> */}
            <Row>
               {loading ? <p>Cargando...</p> : products.map((product) => (
                  <ProductCard
                     key={product.id}
                     id={product.id}
                     price={product.price}
                     description={product.description}
                     image={`/products/img/${product.image}`}
                     className={"product-card-add-button"}
                  />
               ))
               }
            </Row>
         </Container>
      </div>
   );
}

export default ProductsList;
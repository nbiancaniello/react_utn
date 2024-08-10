/* eslint-disable react/prop-types */
import './Products.css';
import { Card } from 'react-bootstrap';
import Column from 'react-bootstrap/Col';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';

 function ProductCard({id, price, description, image}) {
   return (
      <Column>
         <div className="product-card">
            <Card key={id}>
               <Link to={`/products/${id}`}><Card.Img className ="card-img" variant="top" src={image} /></Link>
               <Card.Body>
                  <Card.Title className='card-description'>{description}</Card.Title>
                  <Card.Text className='card-price'>$ {price}</Card.Text>
                  <ProductForm 
                     id={id}
                     price={price}
                     description={description}
                     image={image}
                     className={"product-card-add-button"}
                     />
               </Card.Body>
            </Card>
         </div>
      </Column>
   );
}

export default ProductCard;
import '../Products.css';
import { Card } from 'react-bootstrap';
import Column from 'react-bootstrap/Col';
import PromotionCardForm from './PromotionCardForm';
import PropTypes from 'prop-types';
 function PromotionCard({id, price, description, source, addProduct, deleteProduct}) {

   PromotionCard.propTypes = {
      id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired, // Add PropTypes validation for description prop
      source: PropTypes.string.isRequired,
      addProduct: PropTypes.func.isRequired,
      deleteProduct: PropTypes.func.isRequired,
   };

   return (
      <Column>
         <div className="card-product">
            <Card id={id}>
               <Card.Img className ="card-img" variant="top" src={source} />
               <Card.Body>
                  <Card.Title className='card-description'>{description}</Card.Title>
                  <Card.Text className='card-price'>{price}</Card.Text>
                  <PromotionCardForm 
                     id={id} 
                     price={price} 
                     description={description} 
                     addProduct={addProduct} 
                     deleteProduct={deleteProduct}/>
               </Card.Body>
            </Card>
         </div>
      </Column>
   );
}

export default PromotionCard;
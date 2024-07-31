import '../Products.css';
import PromotionCard from './PromotionCard';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
function PromotionsList({addProduct, deleteProduct}) {

   PromotionsList.propTypes = {
      addProduct: PropTypes.func.isRequired,
      deleteProduct: PropTypes.func.isRequired,
    };

   return (
      <div className='promotions'>
         <h1 className="promotions-title">Promociones</h1>
         <Container>
            <Row xs sm={2} md={3} lg={4} xl={6} xxl={12}>
               <PromotionCard id = "1" price= "$2400" description="Coca Cola Clásica 2L No retornable" source={`/products/two-liter-bottle-of-coca-cola.jpg`} addProduct={addProduct} deleteProduct={deleteProduct}/>
               <PromotionCard id = "2" price= "$2300" description="Aceite de Girasol 1.5L Natura" source={`/products/aceite-natura-litre-half.webp`} addProduct={addProduct} deleteProduct={deleteProduct}/>
               <PromotionCard id = "3" price= "$2300" description="Cerveza 730cc Rubia Patagonia" source={`/products/cerveza-patagonia-730cc.webp`} addProduct={addProduct} deleteProduct={deleteProduct}/>
               <PromotionCard id = "4" price= "$2300" description="Rollo de Cocina x3 Sussex" source={`/products/rollo-cocina-sussex-x3.webp`} addProduct={addProduct} deleteProduct={deleteProduct}/>
               <PromotionCard id = "5" price= "$4500" description="Café Dolca Original 170gr Nescafé" source={`/products/DOLCA_170G_.webp`} addProduct={addProduct} deleteProduct={deleteProduct}/>
               <PromotionCard id = "6" price= "$3500" description="Atún al Natural La Campagnola" source={`/products/Atun-natural-la-campagnola.webp`} addProduct={addProduct} deleteProduct={deleteProduct}/>
            </Row>
         </Container>
      </div>
   );
}

export default PromotionsList;
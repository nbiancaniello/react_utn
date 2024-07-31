import { Container } from 'react-bootstrap';
import NewArrivals from '../newArrivals/NewArrivals';
import PromotionCardControl from '../promotions/PromotionCardControl';
// import PromotionsList from '../promotions/PromotionsList';
import './FrontPage.css';

function FrontPage() {
   return (
      <Container className='frontPage-container'>
         <NewArrivals />
         <PromotionCardControl />
         {/* <PromotionsList /> */}
      </Container>
   );
};

export default FrontPage;
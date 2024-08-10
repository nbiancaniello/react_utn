import './ShoppingCart.css';
import ShoppingCartItem from './ShoppingCartItem';
import { useCart } from '../cart/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShopSlash} from '@fortawesome/free-solid-svg-icons/faShopSlash';
import HorizontalRule from './HorizontalRule';

const ShoppingCart = () => {
  const { items, totalCost } = useCart(); 

  return (
    <>
      <h2> Carrito de Compras </h2>
      <div className='shopping-cart'>
          {items.length === 0 &&
          <div className='empty-cart'>
            <FontAwesomeIcon size='10x' icon={faShopSlash} />
            <p>No hay items en el carrito</p>
          </div>}
          {items.map((item) => (
            <ShoppingCartItem key={item.id} id={item.id} description={item.description} price={item.price} qty={item.qty} image={item.image} />
          ))
          
          }
          {items.length !== 0 &&
          <HorizontalRule/>}
          {items.length !== 0 && 
          <p className='shopping-cart-total'>Total: ${totalCost}</p>}
      </div>
    </>
    
  );
};

export default ShoppingCart;
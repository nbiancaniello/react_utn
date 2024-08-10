import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Contact() {
   return (
      <div className="col footer-contacts">
         <h3>Contacto</h3>
         <ul>
            <li className='footer-contacts-item'>
               <FontAwesomeIcon size="xl" icon={faPhone} />
               <p>4667-3223</p>
            </li>
            <li className='footer-contacts-item'>
               <FontAwesomeIcon size="xl" icon={faWhatsapp} />
               <p>114667-3223</p>
            </li>
            <li className='footer-contacts-item'>
               <FontAwesomeIcon size="xl" icon={faInstagram} />
               <p><a href="https://www.instagram.com/autoserviciomiguelangel/"> autoserviciomiguelangel</a>
               </p>
            </li>
         </ul>
      </div>
   );
};

export default Contact;
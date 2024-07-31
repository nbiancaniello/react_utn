import Contact from "../contact/Contact";
import Schedule from "../schedule/Schedule";
import './Footer.css'

function Footer() {
   return (
      <footer className="bg-body-secondary">
         <div className="container-fluid text-center footer-content">
            <div className="row footer-row">
               <Contact />
               <Schedule />
            </div>
         </div>
      </footer>
   );

}

export default Footer;
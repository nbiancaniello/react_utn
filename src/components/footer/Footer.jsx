import Contact from "../contact/Contact";
import MapEmbed from "../mapEmbed/MapEmbed";
import Schedule from "../schedule/Schedule";
import './Footer.css'

function Footer() {
   return (
      <footer>
         <div className="footer-content">
            <Contact />
            <Schedule />
            <MapEmbed />
         </div>
      </footer>
   );

}

export default Footer;
import React from "react";
import { Carousel } from "react-bootstrap";

function NewArrivals() {
   return (
      <div className='newArrivals'>
         <h1 className="newArrivals-title">Recién Llegado</h1>
         <div className="newArrivals-carousel">
            <Carousel>
               <Carousel.Item>
                  <img className="d-block" src="https://baconmockup.com/640/360" alt="Carré de Cerdo por 1kg" />
                  <Carousel.Caption>
                     <h3>$6000</h3>
                     <p>Carré de Cerdo por 1kg</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block" src="https://baconmockup.com/760/360" alt="Bife de Chorizo por 1kg" />
                  <Carousel.Caption>
                     <h3>$9000</h3>
                     <p>Bife de Chorizo por 1kg</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block" src="https://baconmockup.com/640/400" alt="Panceta x 250gr" />
                  <Carousel.Caption>
                     <h3>$1800</h3>
                     <p>Panceta x 250gr</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </div>
      </div>
   );
};

export default NewArrivals;
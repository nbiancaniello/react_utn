import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import './User.css';
function UserProfile() {
   return (
      <div className='user-profile'>
      <Alert variant="info">
            Esta seccion se encuentra en construcción. Mostrando valores por defecto solamente
      </Alert>
      <Form id='user-details'>
         <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
               type="text"
               placeholder="Nombre"
               defaultValue="Lalo"
               readOnly
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
               type="text"
               placeholder="Apellido"
               defaultValue="Landa"
               readOnly
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
         </Form.Group>
         <Form.Label>Email</Form.Label>
         <Form.Control
            type="email"
            placeholder="Email"
            defaultValue="lalolanda@customer.com"
            readOnly
            />
         <Form.Label>Teléfono</Form.Label>
         <Form.Control
            type="text"
            placeholder="Teléfono"
            defaultValue="+54 9 11 5555-5555"
            readOnly
            />
         <Form.Label>Domicilio</Form.Label>
         <Form.Control
            type="text"
            placeholder="Domicilio"
            defaultValue="Avenida Siempreviva 742"
            readOnly
         />   
      </Form>
      </div>
   );
}

export default UserProfile;
import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
        }
        console.log(conFom)
    }
  return (
    <>
        <div className="container-fluid g-0">
            <Form className="row ">
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="" className="form-control-lg " />
                </Form.Group>
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="" className="form-control-lg " />
                </Form.Group> 
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" className="form-control-lg " />
                </Form.Group>
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" placeholder="" className="form-control-lg " />
                </Form.Group>
                <Form.Group className="col-sm-12 my-2">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control as="textarea" rows={3} className="form-control-lg " />
                </Form.Group>
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>Budget Range</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend" className=""><FaDollarSign /></InputGroup.Text>
                        <Form.Control type="type" min="0.00" max="10000.00" step="0.01" className="form-control-lg " />
                    </InputGroup>                    
                </Form.Group>
                <Form.Group className="col-sm-6 my-2">
                    <Form.Label>Is there a deadline?</Form.Label>
                    <Form.Control type="tel" placeholder="" className="form-control-lg " />
                </Form.Group>                    
            </Form>
        </div>
    </>
  )
}
export default ContactForm
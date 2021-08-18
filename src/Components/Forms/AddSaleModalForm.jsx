import React, { useRef } from 'react'
import {Card, Button, Form, Alert, Row} from 'react-bootstrap' 
import './AddSaleModalForm.css'


export const AddSaleModalForm = ({show}) => {

    const linkRef = useRef()
    const suburbRef= useRef()
    const postcodeRef = useRef()

    const saleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='sales-form-container'
        style={{display: show ? 'flex' : 'none'}}>
            <Card className='sales-modal-form'>
                <Card.Body>
                    <h1>Add A Sale</h1>
                    <div className='horizontal-line'></div>
                        <p className='details-title'>Create an account</p>
                    <div className='horizontal-line'></div>
                    <Form onSubmit={saleFormSubmit} id='sales-form'>
                        <Form.Group>
                            <Form.Label>Listing Link</Form.Label>
                            <Form.Control type='text' ref={linkRef} required/>
                        </Form.Group>    
                        <Row className='g-2'>
                            <Form.Group id='suburb' className='w-50'>
                                <Form.Label>Suburb</Form.Label>
                                <Form.Control type='text' ref={suburbRef} required/>
                            </Form.Group>
                            <Form.Group id='postcode' className='w-50'>
                                <Form.Label>Post Code</Form.Label>
                                <Form.Control type='text' ref={postcodeRef} required/>
                            </Form.Group>
                        </Row>
                    </Form> 
                    <Button>Submit</Button>    
                </Card.Body>
            </Card>
        </div>
    )
}

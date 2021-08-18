import React, { useRef } from 'react'
import {Card, Button, Form, Row} from 'react-bootstrap' 
import './AddSaleModalForm.css'
import firebase from 'firebase'
import { useAuth } from '../../Contexts/AuthContext'



export const AddSaleModalForm = ({show}) => {

    const linkRef = useRef()
    const suburbRef= useRef()
    const postcodeRef = useRef()
    const streetAddressRef = useRef()
    const saleValueRef = useRef()
    const dateListedRef = useRef()
    const dateSoldRef = useRef()

    const { currentUser } = useAuth()



    const saleFormSubmit = async (e) => {
        e.preventDefault()
        await console.log(currentUser)
    }

    return (
        <div className='sales-form-container'
        style={{display: show ? 'flex' : 'none'}}>
            <Card className='sales-modal-form'>
                <Card.Body>
                    <h1 id='title'>Add A Sale</h1>
                    <Form onSubmit={saleFormSubmit} id='sales-form'>
                        <div className='inline-title'>
                            <div className='horizontal-line'></div>
                            <p className='details-title'>Property Details</p>
                            <div className='horizontal-line'></div>
                        </div>
                        <Form.Group>
                            <Form.Label>Realestate.com.au listing link</Form.Label>
                            <Form.Control type='text' ref={linkRef} required/>
                        </Form.Group>    
                        <Form.Group>
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type='text' ref={streetAddressRef} required/>
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
                        <div className="inline-title no2">
                            <div className="horizontal-line"></div>
                            <p className="details-title">Sale Details</p>
                            <div className="horizontal-line"></div>
                        </div>
                        <Form.Group>
                            <Form.Label>Sale Value</Form.Label>
                            <Form.Control type='number' ref={saleValueRef} required/>
                        </Form.Group>
                        <Row className='g-2'>
                            <Form.Group className='w-50'>
                                <Form.Label>Date Listed</Form.Label>
                                <Form.Control type='date' ref={dateListedRef} required />
                            </Form.Group>
                            <Form.Group className='w-50'>
                                <Form.Label>Date Sold</Form.Label>
                                <Form.Control type='date' ref={dateSoldRef} required />
                            </Form.Group>
                        </Row>
                        <Button id='submit-button' type='Submit' >Submit</Button>    
                    </Form> 
                </Card.Body>
            </Card>
        </div>
    )
}

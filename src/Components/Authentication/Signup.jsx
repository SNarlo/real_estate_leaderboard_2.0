import React, {useRef} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import Relb_Logo_Blue from '../../Media/SVG/relb-logo-blue.svg'
import './Signup.css'

export default function SignUp() {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const branchRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const imageRef = useRef()

    return (
        <>
            <Card >
                <Card.Body>
                    <img src={Relb_Logo_Blue} alt="RELB logo"/>
                    <div>
                        <span></span>
                        <p>Create an account</p>
                        <span></span>
                    </div>
                    <Form >
                        <Form.Group id='first-name'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' ref={firstNameRef} required/>
                        </Form.Group>
                        <Form.Group id='last-name'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' ref={lastNameRef} required/>
                        </Form.Group>
                        <Form.Group id='branch'>
                            <Form.Label for='branches'>Branch</Form.Label>
                            <Form.Select name='branches' id='branches' ref={branchRef} required>
                                <option value='Toowong'>Toowong</option>
                                <option value='Brassall'>Brassall</option>
                                <option value='Ripley'>Ripley</option>
                                <option value='Platinum'>Platinum</option>
                                <option value='Greater Springfield'>Greater Springfield</option>
                                <option value='Karalee'>Karalee</option>
                                <option value='Toowoomba'>Toowoomba</option>
                                <option value='Springwood'>Springwood</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group id='email'>
                            <Form.Label>NGU Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='text' ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='text' ref={passwordConfirmationRef} required/>
                        </Form.Group>
                        <Form.Group id='profile-img'>
                            <Form.Label for='img'>Profile Picture</Form.Label>
                            <Form.Control type='file' id='img' name='Upload' accept='image/*' ref={imageRef}/>
                        </Form.Group>
                        <Button type='Submit'>Create Account</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

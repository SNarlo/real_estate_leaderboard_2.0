import React, {useRef, useState} from 'react'
import {Card, Button, Form, Row, Alert} from 'react-bootstrap'
import Relb_Logo_Blue from '../../Media/SVG/relb-logo-blue.svg'
import './Login.css'
import {useAuth} from '../../Contexts/AuthContext'

const Login = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const branchRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const imageRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }


    return (
        <div className='login-form-container'> 
            <Card id='login-card'>
                <Card.Body id='login-card-body'>
                    <img src={Relb_Logo_Blue} alt="RELB logo"/>
                    <div className="row" id='google-container'>
                        <div id='inner-google-container' className="col-md-3">
                            <a id='google-a' className="btn btn-outline-dark" role="button">
                            <img id='google-img' width="20px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                Login with Google
                            </a>
                        </div>
                    </div>
                    <div id='create-account-text-container'>
                        <div className='horizontal-line'></div>
                        <p id='create-text'>Or log in with email</p>
                        <div className='horizontal-line'></div>         
                    </div>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} id='form'>
                        <Form.Group id='email'>
                            <Form.Label>NGU Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='text' ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} id='submit-button' type='Submit'>Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
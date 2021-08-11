import React, {useRef, useState} from 'react'
import {Card, Button, Form, Row, Alert} from 'react-bootstrap'
import Relb_Logo_Blue from '../../Media/SVG/relb-logo-blue.svg'
import {Link } from 'react-router-dom'
import './Login.css'
import {useAuth} from '../../Contexts/AuthContext'
import './ForgotPassword.css'


export const ForgotPassword = () => {

    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const [message, setMessage] = useState('')

    const handleVisibleError = () => {
        setAlertVisible(true)
        setError('Failed to reset password')
        setTimeout(() => {
            setAlertVisible(false)
        }, 2000)
    }


    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        setMessage('')
        setError('')
        setLoading(true)
        await forgotPassword(emailRef.current.value)
        setMessage('Check your inbox for further instructions')
    } catch {
        handleVisibleError()
    }

    setLoading(false)
}


    return (
        <div className='forgot-password-form-container'> 
            <Card id='forgot-password-card'>
                <Card.Body id='forgot-password-card-body'>
                    <img src={Relb_Logo_Blue} alt="RELB logo"/>
                    <div id='create-account-text-container'>
                        <div className='horizontal-line'></div>
                        <p id='create-text'>Reset Password By Email</p>
                        <div className='horizontal-line'></div>         
                    </div>
                    {error && alertVisible && <Alert Fade='true' variant='danger' style={{marginTop:"5%"}}>{error}</Alert>}
                    <Form onSubmit={handleSubmit} id='form'>
                        <Form.Group id='email'>
                            <Form.Label>NGU Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <br></br>
                        <span><Link class='form-links' to='/Login'>Return to Log In</Link></span>
                        <Button disabled={loading} id='submit-button' type='Submit'>Reset Password</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

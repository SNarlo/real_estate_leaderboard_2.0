import React, {useRef} from 'react'
import {Button, Form, Alert} from 'react-bootstrap'
import { useAuth } from '../../Contexts/AuthContext'
import './ProfileSettingsPage.css'
import { getRexAuthToken } from '../../RexIntegrations/RexIntegrations'


const ProfileSettingsPage = () => {

    const rexUsernameRef = useRef()
    const rexPasswordRef = useRef()
    const { currentUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        getRexAuthToken(rexUsernameRef.current.value, rexPasswordRef.current.value, currentUser)
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit} className='rex-auth-form'>
                <h1> Connect to Rex</h1>
                <Form.Group id='rex-username-field'>
                    <Form.Label>Rex Username Email</Form.Label>
                    <Form.Control type='text' ref={rexUsernameRef} />
                </Form.Group>
                <Form.Group id='rex-password-field'>
                    <Form.Label>Rex Password</Form.Label>
                    <Form.Control type='password' ref={rexPasswordRef} />
                </Form.Group>
                <Button type='submit'>Connect Rex</Button>
            </Form>
        </div>
    )
}

export default ProfileSettingsPage

import React, {useState, useRef} from 'react'
import {Button, Form, Alert} from 'react-bootstrap'



const ProfileSettingsPage = () => {

    const rexUsernameRef = useRef()
    const rexPasswordRef = useRef()


    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(rexUsernameRef, rexPasswordRef)
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <h1> Connect to Rex</h1>
                <Form.Group id='rex-username-field'>
                    <Form.Label>Rex Username</Form.Label>
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

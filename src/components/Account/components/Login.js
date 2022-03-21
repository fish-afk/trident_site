import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useAlert } from 'react-alert'
import {FcGoogle} from "react-icons/fc"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, signInWithGoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const alert = useAlert();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value).then(res=> {
        alert.show('Logged in successfully!')
        history.push("/Products")
      }).catch((error) => setError("Failed to log in.\n" + error.message))
      
    } catch {
      setError("Failed to log in, Unexpected error")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="bg-dark container text-white mt-4">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <center><Button disabled={loading} className="col-md-4" type="submit">
              Log In
            </Button></center>
          </Form>
          <center><Button className="col-md-4 mt-4 bg-secondary" onClick={signInWithGoogle}>
           <span>Sign in with google <FcGoogle className="fs-1 googleicon"/></span> 
          </Button></center>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

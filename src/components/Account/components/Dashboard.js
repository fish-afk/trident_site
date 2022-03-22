import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout, deleteuser } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card className="bg-dark text-white mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}<br/>
          <strong>Name:</strong> {currentUser.displayName || undefined}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/users-orders" className="btn btn-primary w-100 mt-3">
            My orders.
          </Link>
          <button type="button" className="btn btn-danger w-100 text-center mt-2" onClick={deleteuser}>Delete account</button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link text-danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}

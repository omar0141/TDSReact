/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import PasswordField from "../../components/PasswordField"
import { LoginAction } from "../../store/action/AccessActions"
import { Link, useNavigate } from "react-router-dom"

export default function LoginScreen() {
  // get form values
  const [values, setValues] = useState({})
  const onFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  //
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // submit form
  const handleSubmit = async (e) => {
    const form = e.currentTarget
    e.preventDefault()
    if (form.checkValidity() === false) {
      e.stopPropagation()
    }
    setValidated(true)
    setLoading(true)
    await LoginAction(navigate, values)
    setLoading(false)
  }
  //
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <Col xs={9}>
          <span style={{ fontSize: 20, fontWeight: 400 }}>Welcome to </span>
          <span className="tds-title">TDS</span>
          <span style={{ fontSize: 55, fontWeight: 500 }} className="d-block">
            Sign in
          </span>
        </Col>
        <Col xs={3} style={{ fontSize: 15, fontWeight: 400 }}>
          <span className="d-block">No Account?</span>
          <Link style={{ color: "#1faae3" }} to="/register">
            Sign up
          </Link>
        </Col>
      </div>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        style={{ marginBottom: 100, marginTop: 34 }}>
        <Form.Group style={{ marginBottom: 38 }} controlId="validationEmail">
          <Form.Label>Enter your username or email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            onChange={onFormChange}
            placeholder="Username or email address"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{ marginBottom: 15 }} controlId="password">
          <PasswordField name="password" onChange={onFormChange} required={true} />
        </Form.Group>
        <a
          className="d-block text-end"
          style={{ fontSize: 13, fontWeight: 400, marginBottom: 32 }}
          href="#">
          Forgot Password
        </a>
        {!loading ? (
          <Button type="submit" variant="primary">
            Sign in
          </Button>
        ) : (
          <Button type="submit" variant="primary" disabled>
            <img height={40} src={"./loading.gif"} alt="" />
          </Button>
        )}
      </Form>
    </div>
  )
}

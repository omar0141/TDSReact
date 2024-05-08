/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import PasswordField from "../../components/PasswordField"
import { RegisterAction } from "../../store/action/AccessActions"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterScreen() {
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
    await RegisterAction(navigate, values)
    setLoading(false)
  }
  //
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <Col xs={8}>
          <span style={{ fontSize: 20, fontWeight: 400 }}>Welcome to </span>
          <span className="tds-title">TDS</span>
          <span style={{ fontSize: 55, fontWeight: 500 }} className="d-block">
            Sign up
          </span>
        </Col>
        <Col xs={4} style={{ fontSize: 13, fontWeight: 400 }}>
          <span className="d-block">Have an Account?</span>
          <Link to="/login">
            <a style={{ color: "#1faae3" }}>Sign in</a>
          </Link>
        </Col>
      </div>
      <Form validated={validated} onSubmit={handleSubmit} style={{ marginTop: 34 }}>
        <Form.Group style={{ marginBottom: 38 }} controlId="validationEmail">
          <Form.Label>email address</Form.Label>
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
        <div className="d-flex">
          <Col className="me-3">
            <Form.Group style={{ marginBottom: 38 }} controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                name="first_name"
                type="text"
                onChange={onFormChange}
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">First Name required.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={{ marginBottom: 38 }} controlId="validationLastName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                name="last_name"
                type="text"
                onChange={onFormChange}
                placeholder="Last name"
              />
              <Form.Control.Feedback type="invalid">Last Name required.</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </div>
        <Form.Group style={{ marginBottom: 40 }} controlId="password">
          <PasswordField name="password" onChange={onFormChange} required={true} />
        </Form.Group>
        <Form.Group style={{ marginBottom: 38 }} controlId="validationType">
          <Form.Label>User type</Form.Label>
          <Form.Select required name="type" onChange={onFormChange}>
            <option value="">Select user type</option>
            <option value="owner">Studio Owner</option>
            <option value="customer">Customer</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">User type required.</Form.Control.Feedback>
        </Form.Group>
        {!loading ? (
          <Button type="submit" variant="primary">
            Sign up
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Form, Col, Row } from "react-bootstrap"
import { AiOutlineSearch } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import SideMenu from "./SideMenu"
import MyApi from "../../../config/apis"
import { useDispatch } from "react-redux"
import { GetStudiosAction } from "../../../store/action/StudiosAction"

export default function DesktopHeader() {
  const dispatch = useDispatch()
  const [values, setValues] = useState({})
  const navigate = useNavigate()

  const onFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const getStudios = async (e) => {
    e.preventDefault()
    await GetStudiosAction(dispatch, { name__contains: values.search })
    navigate("/studios")
  }
  return (
    <Row className="hide-mobile py-3">
      <Col md={2} lg={1}>
        <Link to="/">
          <img width={100} height={56} src={"./logo.png"} alt="TDS" />
        </Link>
      </Col>
      <Col md={6} lg={8}>
        <Form onSubmit={getStudios} className="pt-2">
          <div className="form-wrapper">
            <Form.Control
              type="search"
              name="search"
              onChange={onFormChange}
              style={{ backgroundColor: "#f6f8fb", maxWidth: 340 }}
              placeholder="Search for our nearby studio"
              className=" ps-5 ms-lg-4 h-100"
              aria-label="Search"
            />
            <div className="prefix-icon ms-md-3 ms-lg-5">
              <AiOutlineSearch size={20} />
            </div>
          </div>
        </Form>
      </Col>
      <Col md={4} lg={3}>
        <div className="pt-3 d-flex justify-content-end">
          {MyApi.refreshToken === "" ? (
            <>
              <Link className="nav-item me-4" to="/login">
                Login
              </Link>
              <Link className="nav-item me-4" to="/register">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-item me-4" to="/account">
                <img
                  width={30}
                  height={30}
                  className="circle-avatar"
                  src={"./user.png"}
                  alt="account"
                />
              </Link>
            </>
          )}
          <SideMenu placement="end" />
        </div>
      </Col>
    </Row>
  )
}

import React, { useState } from "react"
import StudioCard from "./StudioCard"
import { Col, Container, Form } from "react-bootstrap"
import { AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GetStudiosAction } from "../../../store/action/StudiosAction"

export default function StudiosBody() {
  const { studios } = useSelector((state) => state.Studios)
  const location = useLocation()
  return (
    <Container className="mx-xl-5 mt-4">
      <div className="hide-mobile" style={{ fontSize: 29, fontWeight: 600, marginBlock: 50 }}>
        {location.pathname === "/studios" ? "Studios" : "Home"}
      </div>
      <SearchField />
      <div className="hide-desktop">
        <div className="d-flex justify-content-center ">
          <Col className="text-center mb-3">
            <span style={{ fontSize: 20, fontWeight: 500, color: "#1faae3" }}>Choose a Studio</span>
          </Col>
          <Link className="mt-1" style={{ color: "#13607E" }} to="/studios">
            view all
          </Link>
        </div>
      </div>

      {studios.map((studio, i) => (
        <StudioCard obj={studio} key={i} />
      ))}
    </Container>
  )
}

function SearchField() {
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
    <Form onSubmit={getStudios} className="my-3 hide-desktop">
      <div className="form-wrapper">
        <Form.Control
          type="search"
          name="search"
          onChange={onFormChange}
          style={{ backgroundColor: "#f6f8fb", border: "none" }}
          placeholder="Search for our nearby studio"
          className=" ps-5 ms-lg-4"
          aria-label="Search"
        />
        <div className="prefix-icon ms-3">
          <AiOutlineSearch size={22} />
        </div>
      </div>
    </Form>
  )
}

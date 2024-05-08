import React from "react"
import { Col } from "react-bootstrap"
import "../styles/access.css"

export default function AccessLayout(props) {
  return (
    <div className="position-relative">
      <div className="vh-100 d-flex flex-row">
        <Col xs={12} style={{ backgroundColor: "white" }} md={6}>
          <img width={263} className="access-logo" height={157} src={"./logo.png"} alt="TDS" />
        </Col>
        <Col xs={0} md={6} style={{ backgroundColor: "#abe1f2" }}></Col>
      </div>
      <div style={{ top: props.top }} class="position-absolute pb-5 w-100">
        <div className="d-flex justify-content-center">
          <Col xs={11} md={6} lg={5} xl={4} className="access-card">
            {props.body}
          </Col>
        </div>
      </div>
    </div>
  )
}

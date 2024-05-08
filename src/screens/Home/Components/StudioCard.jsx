import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

export default function StudioCard(props) {
  return (
    <Col className="d-inline-block" xs={12} md={6} lg={4}>
      <DesktopCard obj={props.obj} />
      <MobileCard obj={props.obj} />
    </Col>
  )
}

function MobileCard(props) {
  return (
    <Link to={`/studio_details/${props.obj.id}`}>
      <div className="hide-desktop studio-card mb-3">
        <img
          style={{ borderRadius: 20 }}
          width={"100%"}
          height={350}
          src={"./image1.png"}
          alt={props.obj.name}
        />
        <div
          style={{
            backgroundColor: "#1C1C1C66",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
          className="position-absolute p-3 w-100 bottom-0">
          <div style={{ fontSize: 25, fontWeight: 600, color: "white" }}>{props.obj.name}</div>
          <Row className="text-white">
            <Col xs={1}>
              <IoLocationSharp size={25} color="#7F8FA4" />
            </Col>
            <Col xs={7}>1st Floor, sample Mall, Cairo, Egypt</Col>
            <Col xs={4}></Col>
          </Row>
        </div>
      </div>
    </Link>
  )
}

function DesktopCard(props) {
  return (
    <div className="hide-mobile studio-card mx-2 mb-3">
      <Link to={`/studio_details/${props.obj.id}`}>
        <div>
          <img
            style={{ borderRadius: 20 }}
            width={"100%"}
            height={250}
            src={"./image1.png"}
            alt={props.obj.name}
          />
        </div>
      </Link>
      <div style={{ fontSize: 25, fontWeight: 600, marginBlock: 30, paddingInline: 15 }}>
        {props.obj.name}
      </div>
      <hr style={{ color: "grey", margin: 0 }} />
      <div style={{ paddingInline: 15, paddingBlock: 10, fontSize: 15 }}>
        <Row>
          <Col xs={1}>
            <IoLocationSharp size={25} color="#7F8FA4" />
          </Col>
          <Col xs={6}>1st Floor, sample Mall, Cairo, Egypt</Col>
          <Col xs={5}>
            <Link to={`/book_studio/${props.obj.id}`}>
              <Button variant="primary">Book now</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}

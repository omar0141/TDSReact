import React from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import { IoLocationSharp } from "react-icons/io5"
import { MdAccessTimeFilled } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function SDDesktopBody() {
  const { studios } = useSelector((state) => state.Studios)
  if (studios.length === 0) {
    return (
      <div style={{ height: "85vh" }} className="d-flex align-items-center justify-content-center">
        <h2>No Data Found</h2>
      </div>
    )
  }
  return (
    <Container className="hide-mobile">
      <div style={{ marginBlock: 22, color: "#7F8FA4", fontSize: 14 }}>
        <Link style={{ color: "#7F8FA4" }} to="/">
          Home
        </Link>{" "}
        • {studios[0].name}
      </div>
      <div className="d-flex align-items-stretch">
        <Col className="d-inline-block me-3" md={4}>
          <img
            style={{ borderRadius: 8 }}
            width={"100%"}
            height={400}
            src={"./image2.png"}
            alt={studios[0].name}
          />
        </Col>
        <Col className="d-inline-block" md={8}>
          <ImageCard image="./image1.png" alt={studios[0].name} />
          <ImageCard image="./image3.png" alt={studios[0].name} />
          <ImageCard image="./image4.png" alt={studios[0].name} />
          <div className="d-inline position-relative">
            <ImageCard image="/image5.png" alt={studios[0].name} />
            <Button
              className="position-absolute"
              style={{ bottom: -60, right: 40 }}
              variant="light">
              See all images
            </Button>
          </div>
        </Col>
      </div>
      <div style={{ borderRadius: 8 }} className="py-3 bg-white">
        <Row className="px-4">
          <Col style={{ fontWeight: 700, fontSize: 25 }} md={9}>
            {studios[0].name}
          </Col>
          <Col md={3}>
            <Link to={`/book_studio/${studios[0].id}`}>
              <Button variant="primary">Book now</Button>
            </Link>
          </Col>
        </Row>
        <Row className="px-4">
          <Col>
            <span style={{ fontWeight: 600, fontSize: 17 }}>5.0 ★★★★★ </span>
            <span style={{ fontWeight: 500, fontSize: 15, color: "#322A7D" }}>(196)</span>
            <span style={{ marginInlineStart: 12, fontSize: 20 }}>• </span>
            <span style={{ color: "#FFA101" }}>Closed </span>
            <span>opens soon at 9:00am</span>
          </Col>
        </Row>
        <hr />
        <Row className="px-4">
          <Col md={5} lg={4}>
            <Row>
              <Col md={1}>
                <IoLocationSharp className="me-2" size={25} color="#7F8FA4" />
              </Col>
              <Col>
                <span>1st Floor, sample Mall, 1234, 12th Main Rd, sample, Cairo, Egypt</span>
              </Col>
            </Row>
          </Col>
          <Col md={7} lg={5}>
            <Row>
              <Col md={1}>
                <MdAccessTimeFilled className="me-2" size={25} color="#7F8FA4" />
              </Col>
              <Col md={5} lg={4}>
                <span className="d-block">Mon</span>
                <span className="d-block">Tue - Sun</span>
              </Col>
              <Col>
                <span className="d-block">Closed</span>
                <span className="d-block">10:00 am - 07:30 pm</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

function ImageCard(props) {
  return (
    <Col className="d-inline-block" md={6}>
      <div className="me-3 mb-3">
        <img
          style={{ borderRadius: 8, objectFit: "cover" }}
          width={"100%"}
          height={190}
          src={props.image}
          alt={props.alt}
        />
      </div>
    </Col>
  )
}

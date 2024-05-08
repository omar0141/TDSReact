/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { AiOutlineLeft } from "react-icons/ai"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function SDMobileBody() {
  const { studios } = useSelector((state) => state.Studios)
  const navigate = useNavigate()
  if (studios.length === 0) {
    return (
      <div style={{ height: "85vh" }} className="d-flex align-items-center justify-content-center">
        <h2>No Data Found</h2>
      </div>
    )
  }
  return (
    <div className="vh-100 hide-desktop">
      <div className="position-relative">
        <img
          style={{ objectFit: "cover", height: "50vh" }}
          width={"100%"}
          src={"./image1.png"}
          alt={studios[0].name}
        />
        <Button
          className="position-absolute px-2 py-1"
          style={{ top: 20, left: 20, borderRadius: 50 }}
          onClick={() => {
            navigate(-1)
          }}
          variant="light">
          <AiOutlineLeft />
        </Button>
        <div
          className="position-absolute w-100 ps-4"
          style={{ bottom: 20, left: 0, color: "white" }}>
          <div style={{ fontSize: 25, fontWeight: 600 }}>{studios[0].name}</div>
          <Row className="w-100">
            <Col>
              <span style={{ fontSize: 18, fontWeight: 500 }} className="ps-1">
                EG 1,000
              </span>
            </Col>
            <Col className="text-center">
              <span className="ps-5" style={{ fontSize: 12, fontWeight: 600 }}>
                Available
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ paddingInlineStart: 16, paddingBlockStart: 26 }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600
          }}>
          Location
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            paddingInlineEnd: 47
          }}>
          1st Floor, sample Mall, 1234, 12th Main Rd, sample, Cairo, Egypt
        </div>
        <a href="#" style={{ fontSize: 16, fontWeight: 500, color: "#322A7D" }}>
          Get directions
        </a>
        <div className="overflow-x-scroll">
          <div className="d-flex py-3">
            <img
              style={{ borderRadius: 10, marginInlineEnd: 16 }}
              width={130}
              height={130}
              src={"./image1.png"}
              alt={studios[0].name}
            />
            <img
              style={{ borderRadius: 10, marginInlineEnd: 16, objectFit: "cover" }}
              width={130}
              height={130}
              src={"./image3.png"}
              alt={studios[0].name}
            />
            <img
              style={{ borderRadius: 10, marginInlineEnd: 16, objectFit: "cover" }}
              width={130}
              height={130}
              src={"./image4.png"}
              alt={studios[0].name}
            />
            <img
              style={{ borderRadius: 10, marginInlineEnd: 16, objectFit: "cover" }}
              width={130}
              height={130}
              src={"./image1.png"}
              alt={studios[0].name}
            />
          </div>
        </div>
      </div>
      <div className="p-3 position-fixed w-100 bottom-0">
        <Link to={`/book_studio/${studios[0].id}`}>
          <Button variant="primary">Book Studio</Button>
        </Link>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react"
import { formatDayMonthYear } from "../../../config/utils/DateFormats"
import { MdDone, MdCancel } from "react-icons/md"
import { Col, Row } from "react-bootstrap"
import { IoLocationSharp } from "react-icons/io5"
import { CancelReserveAction } from "../../../store/action/ReservesAction"
import { useNavigate } from "react-router"

export default function ReserveDetails(props) {
  const navigate = useNavigate()
  const [days, setDays] = useState(0)
  useEffect(() => {
    const diffTime = Math.abs(
      Date.parse(props.reserve.from_date) - Date.parse(props.reserve.to_date)
    )
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
    setDays(diffDays)
  }, [props])

  return (
    <div className="bg-white rounded p-4 mt-3">
      <div style={{ fontSize: 20, fontWeight: 600 }}>
        {formatDayMonthYear(props.reserve.from_date)}
      </div>
      <div
        className="d-flex px-1"
        style={{
          borderRadius: 30,
          backgroundColor: "#2EC114",
          width: 100,
          height: 30,
          marginBlock: 20
        }}>
        <div style={{ width: 20, height: 20, marginBlock: 5 }} className=" bg-white rounded-circle">
          <MdDone className="mb-1" style={{ color: "#2EC114", marginInlineStart: 2 }} />
        </div>
        <span
          className="ps-1"
          style={{ color: "white", fontSize: 12, fontWeight: 600, marginTop: 7 }}>
          Confirmed
        </span>
      </div>
      <div>
        <Row>
          <Col md={3} lg={2}>
            <img
              className="rounded"
              width={80}
              height={80}
              src="./image1.png"
              alt={props.reserve.studio.name}
            />
          </Col>
          <Col className="align-self-center">
            <div style={{ fontSize: 16, fontWeight: 700 }}>{props.reserve.studio.name}</div>
            <div style={{ fontSize: 12, fontWeight: 400 }}>1123 Road, Egypt</div>
            <div style={{ fontSize: 12, fontWeight: 400 }}>Booking ref. #: 65742695</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="me-3 text-center">
              <div
                className="rounded"
                style={{ backgroundColor: "#F7F8FA", padding: 15, cursor: "pointer" }}>
                <IoLocationSharp size={25} style={{ color: "black" }} />
              </div>
              <span style={{ fontSize: 12 }}>Directions</span>
            </div>
            <div className="text-center">
              <div
                onClick={async () => {
                  await CancelReserveAction(navigate, props.reserve.id)
                }}
                className="rounded"
                style={{ backgroundColor: "#F7F8FA", padding: 15, cursor: "pointer" }}>
                <MdCancel size={25} style={{ color: "black" }} />
              </div>
              <span style={{ fontSize: 12 }}>Cancel</span>
            </div>
          </Col>
        </Row>
        <Row className="g-0 mx-3" style={{ marginTop: 45 }}>
          <Col style={{ fontSize: 16, fontWeight: 600 }}>Number of days</Col>
          <Col className="text-end">EG 900</Col>
        </Row>
        <div className="mx-3" style={{ fontSize: 13, fontWeight: 400 }}>
          {days} days
        </div>
        <hr />
        <div style={{ fontSize: 15, fontWeight: 600 }}>Cancellation policy</div>
        <div style={{ fontSize: 14, fontWeight: 400 }}>
          Cancel for 15 minutes from reservation time
        </div>
      </div>
    </div>
  )
}

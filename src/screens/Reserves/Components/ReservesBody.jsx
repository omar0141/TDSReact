import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { formatDayMonthYear } from "../../../config/utils/DateFormats"
import ReserveDetails from "./ReserveDetails"

export default function ReservesBody() {
  const { reserves } = useSelector((state) => state.Reserves)
  const [selectedReserve, setSelectedReserve] = useState({})
  const selectReserve = (reserve) => {
    setSelectedReserve(reserve)
  }
  return (
    <div className="py-4">
      <Container>
        <div style={{ fontWeight: 600, fontSize: 20, paddingBottom: 5 }}>Upcoming appointments</div>
        <Row>
          <Col className="overflow-y-scroll" style={{ height: "80vh" }} md={5} xl={4}>
            {reserves.map((reserve, i) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    selectReserve(reserve)
                  }}>
                  <ReserveCard
                    selected={selectedReserve.id === reserve.id ? true : false}
                    key={reserve.id}
                    reserve={reserve}
                  />
                </div>
              )
            })}
          </Col>
          <Col md={7} xl={8}>
            {Object.entries(selectedReserve).length !== 0 ? (
              <ReserveDetails reserve={selectedReserve} />
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function ReserveCard(props) {
  return (
    <div
      style={props.selected ? { borderInlineEnd: "3px solid #1faae3" } : {}}
      className="bg-white p-3 mt-3 rounded">
      <Row>
        <Col xs={3} md={4} lg={3}>
          <img className="rounded" width={80} height={80} src="./image1.png" alt="" />
        </Col>
        <Col className="align-self-center ps-3" xs={9} md={8} lg={9}>
          <div style={{ fontSize: 11, fontWeight: 400 }}>
            {formatDayMonthYear(props.reserve.from_date)}
          </div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>{props.reserve.studio.name}</div>
        </Col>
      </Row>
    </div>
  )
}

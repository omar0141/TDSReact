import React from "react"
import { Col, Row } from "react-bootstrap"
import { AiOutlineHome, AiOutlineBold, AiOutlineUser } from "react-icons/ai"
import { LuMic2 } from "react-icons/lu"
import { Link, useLocation } from "react-router-dom"

export default function BottomBar() {
  return (
    <div>
      <div className="hide-desktop bg-white p-2 position-fixed w-100 bottom-0">
        <Row>
          <BottomBarItem path="/" icon={<AiOutlineHome size={20} className="mb-1" />} name="Home" />
          <BottomBarItem
            path="/bookings"
            icon={<AiOutlineBold size={20} className="mb-1" />}
            name="Booking"
          />
          <BottomBarItem
            path="/studios"
            icon={<LuMic2 size={20} className="mb-1" />}
            name="Studios"
          />
          <BottomBarItem
            path="/account"
            icon={<AiOutlineUser size={20} className="mb-1" />}
            name="Account"
          />
        </Row>
      </div>
      <div style={{ height: 70 }} className="hide-desktop"></div>
    </div>
  )
}
function BottomBarItem(props) {
  const location = useLocation()
  return (
    <Col className="text-center">
      <Link
        style={{ color: location.pathname === props.path ? "#1faae3" : "black" }}
        to={props.path}
        onClick={props.onClick}>
        {props.icon}
        <div>{props.name}</div>
      </Link>
    </Col>
  )
}

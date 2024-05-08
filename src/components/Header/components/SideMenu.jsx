/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Offcanvas } from "react-bootstrap"
import { AiOutlineMenu, AiOutlineHome, AiOutlineBold, AiOutlineUser } from "react-icons/ai"
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md"
import { LuMic2 } from "react-icons/lu"
import "../../../styles/sidemenu.css"
import { Link, useLocation } from "react-router-dom"
import MyApi from "../../../config/apis"
import ClearUserData from "../../../config/utils/ClearUserData"

export default function SideMenu(props) {
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }

  const logout = () => {
    ClearUserData()
    window.location.reload()
    toggleShow()
  }

  return (
    <>
      <AiOutlineMenu cursor={"pointer"} onClick={toggleShow} strokeWidth={50} size={25} />
      <Offcanvas style={{ width: 320 }} show={show} placement={props.placement} onHide={toggleShow}>
        <Offcanvas.Header className="pt-4" style={{ height: 50 }} closeButton>
          <Offcanvas.Title>
            <img width={100} height={50} src={"./logo.png"} alt="TDS" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body className="pt-1">
          <SideMenuItem
            path="/"
            onClick={toggleShow}
            icon={<AiOutlineHome size={20} className="me-2 mb-1" />}
            name="Home"
          />
          <SideMenuItem
            path="/studios"
            onClick={toggleShow}
            icon={<LuMic2 size={20} className="me-2 mb-1" />}
            name="Studios"
          />
          <SideMenuItem
            path="/bookings"
            onClick={toggleShow}
            icon={<AiOutlineBold size={20} className="me-2 mb-1" />}
            name="Booking"
          />
          <SideMenuItem
            path="/account"
            onClick={toggleShow}
            icon={<AiOutlineUser size={20} className="me-2 mb-1" />}
            name="Account"
          />
        </Offcanvas.Body>
        {MyApi.refreshToken === "" ? (
          <Link to="/login">
            <div className="sidemenu-item login m-3">
              <MdOutlineLogin size={20} className="me-2 mb-1" />
              Login
            </div>
          </Link>
        ) : (
          <Link to="/" onClick={logout}>
            <div className="sidemenu-item logout m-3">
              <MdOutlineLogout size={20} className="me-2 mb-1" />
              Logout
            </div>
          </Link>
        )}
      </Offcanvas>
    </>
  )
}

function SideMenuItem(props) {
  const location = useLocation()
  return (
    <Link to={props.path} onClick={props.onClick}>
      <div
        className={location.pathname === props.path ? "sidemenu-item selected" : "sidemenu-item"}>
        {props.icon}
        {props.name}
      </div>
    </Link>
  )
}

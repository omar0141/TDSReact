/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Col, Row } from "react-bootstrap"
import SideMenu from "./SideMenu"

export default function MobileHeader() {
  return (
    <Row className="hide-desktop p-3">
      <Col xs={11}>
        <SideMenu placement="start" />
      </Col>
      <Col xs={1}>
        <img width={30} height={30} className="circle-avatar" src={"./user.png"} alt="account" />
      </Col>
    </Row>
  )
}

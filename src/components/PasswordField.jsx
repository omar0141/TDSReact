/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function PasswordField(props) {
  const [visible, setVisible] = useState(false)
  const showHidePassword = () => {
    setVisible((prevState) => !prevState)
  }
  return (
    <div className="form-wrapper">
      <Form.Label>Enter your Password</Form.Label>
      <Form.Control
        name={props.name}
        required={props.required}
        onChange={props.onChange}
        type={visible ? "text" : "password"}
        placeholder="Password"
        rows={3}
      />
      <div style={{ cursor: "pointer" }} className="suffix-icon">
        <a onClick={showHidePassword}>
          {visible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </a>
      </div>
    </div>
  )
}

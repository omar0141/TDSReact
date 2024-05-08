import React from "react"
import Header from "../../components/Header/Header"
import BottomBar from "../../components/BottomBar/BottomBar"

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <div
        style={{ height: "85vh", fontWeight: 600, fontSize: 35 }}
        className="d-flex flex-column align-items-center justify-content-center">
        <div>404</div>
        <div>Not Found</div>
      </div>
      <BottomBar />
    </div>
  )
}

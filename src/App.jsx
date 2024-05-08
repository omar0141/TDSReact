import AppRoutes from "./config/routes"
import "./styles/main.css"
import "react-toastify/dist/ReactToastify.css"
import React, { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { verifyToken } from "./config/utils/JwtHandler"
import MyApi from "./config/apis"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [refreshToken, setRefreshToken] = useState("")

  useEffect(() => {
    const refresh_token = localStorage.getItem("refresh_token")
    const userType = localStorage.getItem("user_type")
    if (refresh_token != null) {
      MyApi.refreshToken = refresh_token
      MyApi.userType = userType
      setRefreshToken(refresh_token)
      verifyToken()
    }
  }, [])

  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  )
}

export default App

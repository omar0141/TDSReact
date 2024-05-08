/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { useDispatch } from "react-redux"
import { GetReservesAction } from "../../store/action/ReservesAction"
import Loading from "../../components/Loading"
import BottomBar from "../../components/BottomBar/BottomBar"
import MyApi from "../../config/apis"
import ReservesBody from "./Components/ReservesBody"

export default function ReservesScreen() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const getReserves = async () => {
    let url
    if (MyApi.userType === "owner") {
      url = MyApi.getOwnerReserves
    } else if (MyApi.userType === "customer") {
      url = MyApi.getCustomerReserves
    } else {
      url = MyApi.getAdminReserves
    }
    setLoading(true)
    await GetReservesAction(dispatch, url)
    setLoading(false)
  }
  useEffect(() => {
    if (MyApi.refreshToken !== "") {
      getReserves()
    }
  }, [MyApi.refreshToken])
  return (
    <div>
      <Header />
      {loading ? <Loading /> : <ReservesBody />}
      <BottomBar />
    </div>
  )
}

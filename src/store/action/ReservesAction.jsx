import { httpRequest } from "../../config/utils/HttpRequest"
import MyApi from "../../config/apis"
import { toast } from "react-toastify"

export const CreateReserveAction = async (navigate, data = {}) => {
  var res = await httpRequest("POST", MyApi.createReserves, data)
  if (res.status === 200) {
    navigate("/bookings")
    toast.success("Booking Successful", { position: "top-center" })
  }
}

export const GetReservesAction = async (dispatch, url) => {
  var reserves = []
  dispatch({
    type: "get_reserves",
    reserves: reserves
  })
  var res = await httpRequest("GET", url)
  if (res.status === 200) reserves = res.data.data.reserves
  dispatch({
    type: "get_reserves",
    reserves: reserves
  })
}

export const CancelReserveAction = async (navigate, id) => {
  const url = MyApi.cancelReserve + "/" + id
  var res = await httpRequest("PUT", url)
  if (res.status === 200) {
    navigate(0)
    toast.success("Booking canceled Successfully", { position: "top-center" })
  }
}

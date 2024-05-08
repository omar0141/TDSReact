import axios from "axios"
import { JsonToFormData } from "./JsonToFormData"
import MyApi from "../apis"
import { toast } from "react-toastify"
import ClearUserData from "./ClearUserData"

export const refreshToken = async () => {
  var response
  const url = MyApi.refresh
  const data = { refresh: MyApi.refreshToken }
  await axios
    .post(url, JsonToFormData(data))
    .then((res) => {
      response = res
    })
    .catch(function (e) {
      response = e.response ?? {}
      console.log(e.response)
    })
  switch (response.status) {
    case 200:
      MyApi.accessToken = response.data.access
      break
    case 400:
      toast.error(JSON.stringify(response.data.message ?? {}), {
        position: "top-center"
      })
      break
    case 401:
      toast.error("user isn't authorized", {
        position: "top-center"
      })
      ClearUserData()
      break
    case 500:
      toast.error(JSON.stringify(response.data.message ?? {}), {
        position: "top-center"
      })
      break
    case undefined:
      toast.error("Cannot connect to server", {
        position: "top-center"
      })
      break
    default:
      break
  }
  return response
}

export const verifyToken = async () => {
  var response
  const url = MyApi.verify
  const data = { token: MyApi.refreshToken }
  await axios
    .post(url, JsonToFormData(data))
    .then((res) => {
      response = res
    })
    .catch(function (e) {
      response = e.response ?? {}
      console.log(e.response)
    })
  switch (response.status) {
    case 200:
      await refreshToken()
      break
    case 400:
      toast.error(JSON.stringify(response.data.message ?? {}), {
        position: "top-center"
      })
      break
    case 401:
      toast.error("user isn't authorized", {
        position: "top-center"
      })
      ClearUserData()
      break
    case 500:
      toast.error(JSON.stringify(response.data.message ?? {}), {
        position: "top-center"
      })
      break
    case undefined:
      toast.error("Cannot connect to server", {
        position: "top-center"
      })
      break
    default:
      break
  }
  return response
}

import axios from "axios"
import { JsonToFormData } from "./JsonToFormData"
import { toast } from "react-toastify"
import { refreshToken } from "./JwtHandler"
import MyApi from "../apis"

export const httpRequest = async (method, url, data = {}, useAuthorize = true) => {
  var response
  await axios({
    method: method,
    url: url,
    headers: useAuthorize
      ? {
          Authorization: "Bearer " + MyApi.accessToken
        }
      : {},
    data: JsonToFormData(data),
    params: method === "POST" ? null : data
  })
    .then((res) => {
      response = res
    })
    .catch(function (e) {
      response = e.response ?? {}
    })
  switch (response.status) {
    case 200:
      break
    case 400:
      toast.error(JSON.stringify(response.data.message ?? {}), {
        position: "top-center"
      })
      break
    case 401:
      if (useAuthorize) {
        var res = await refreshToken()
        if (res.status === 200) return await httpRequest(method, url, data)
      } else {
        toast.error(JSON.stringify(response.data.message ?? {}), {
          position: "top-center"
        })
      }
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
      toast.error(response.data?.toString() ?? "", {
        position: "top-center"
      })
      break
  }
  return response
}

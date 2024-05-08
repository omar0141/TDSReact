import { httpRequest } from "../../config/utils/HttpRequest"
import MyApi from "../../config/apis"
import { toast } from "react-toastify"

export const LoginAction = async (navigate, data) => {
  var res = await httpRequest("POST", MyApi.login, data, false)
  if (res.status === 200) {
    MyApi.accessToken = res.data.data.access
    MyApi.refreshToken = res.data.data.refresh
    MyApi.userType = res.data.data.type[0].split(".")[1]
    localStorage.setItem("refresh_token", MyApi.refreshToken)
    localStorage.setItem("user_type", MyApi.userType)
    navigate("/")
  }
}

export const RegisterAction = async (navigate, data) => {
  var res = await httpRequest("POST", MyApi.register, data, false)
  if (res.status === 200) {
    navigate("/login")
    toast.success(res.data.message ?? "", {
      position: "top-center"
    })
  }
}

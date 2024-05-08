import MyApi from "../apis"

export default function ClearUserData() {
  MyApi.accessToken = ""
  MyApi.refreshToken = ""
  MyApi.userType = ""
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user_type")
}

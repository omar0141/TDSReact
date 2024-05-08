class MyApi {
  static base = "https://tds.pythonanywhere.com/"
  static api = this.base + "api/"
  static refreshToken = ""
  static accessToken = ""
  static userType = ""
  static login = this.api + "login"
  static register = this.api + "register"
  static refresh = this.api + "token/refresh"
  static verify = this.api + "token/verify"
  static getStudios = this.api + "studios/get"
  static createReserves = this.api + "reserves/create"
  static getCustomerReserves = this.api + "reserves/customer/get"
  static getOwnerReserves = this.api + "reserves/owner/get"
  static getAdminReserves = this.api + "reserves/admin/get"
  static cancelReserve = this.api + "reserves/cancel"
}
export default MyApi

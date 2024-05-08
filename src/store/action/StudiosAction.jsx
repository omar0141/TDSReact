import { httpRequest } from "../../config/utils/HttpRequest"
import MyApi from "../../config/apis"

export const GetStudiosAction = async (dispatch, data = {}) => {
  var studios = []
  dispatch({
    type: "get_studios",
    studios: studios
  })
  var res = await httpRequest("GET", MyApi.getStudios, data, false)
  if (res.status === 200) studios = res.data.data.studios
  dispatch({
    type: "get_studios",
    studios: studios
  })
}

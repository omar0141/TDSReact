const initialValue = {  studios: [] }

export const StudiosReducer = (state = initialValue, action) => {
  if (action.type === "get_studios") {
    return { studios: action.studios }
  } else {
    return state
  }
}

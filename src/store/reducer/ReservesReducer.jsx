const initialValue = { reserves: [] }

export const ReservesReducer = (state = initialValue, action) => {
  if (action.type === "get_reserves") {
    return { reserves: action.reserves.reverse() }
  } else {
    return state
  }
}

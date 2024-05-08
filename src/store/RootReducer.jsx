import { combineReducers } from "redux"
import { StudiosReducer } from "./reducer/StudiosReducer"
import { ReservesReducer } from "./reducer/ReservesReducer"

export const RootReducer = combineReducers({
  Reserves: ReservesReducer,
  Studios: StudiosReducer
})

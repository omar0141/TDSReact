import { legacy_createStore } from "redux"
import { RootReducer } from "./RootReducer"

export const Store = legacy_createStore(RootReducer)

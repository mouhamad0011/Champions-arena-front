import { combineReducers } from "redux";
import userReducer from "./user";
import storeReducer from "./store";
import cafeteriaReducer from "./cafeteria";
import terrainReducer from "./terrain";
import eventReducer from "./event";
import bookingReducer from "./booking";

const allReducers = combineReducers({
    users : userReducer,
    store : storeReducer,
    cafeteria : cafeteriaReducer,
    terrains : terrainReducer,
    events : eventReducer,
    bookings : bookingReducer
});

export default allReducers;
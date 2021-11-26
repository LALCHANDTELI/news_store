import { combineReducers } from "redux";
import Home_News from "./Home_News";
import Business_News from "./Business_News";
import Health_News from "./Health_News";
import Entertainment_News from "./Entertainment_News";
import Science_News from "./Science_News";
import Sports_News from "./Sports_News";
import Technology_News from "./Technology_News";

const RootReducer = combineReducers({
    Home_News,
    Business_News,
    Health_News,
    Entertainment_News,
    Science_News,
    Sports_News,
    Technology_News
})

export default RootReducer
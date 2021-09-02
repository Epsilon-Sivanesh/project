import { createStore } from "redux";
import { firstReducer } from "./reducer";

const store = createStore(firstReducer);

export { store };
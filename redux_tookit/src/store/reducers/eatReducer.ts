import { createReducer } from "typesafe-actions";
import { EatAction } from "../actions/eatAction";

export interface EatState {
  text: string;
}

const initialState = {
  text: "",
};

const eatReducer = createReducer<EatState, EatAction>(initialState, {
  SET_EAT_SIT: (state, { payload }) => ({ ...state, text: payload }),
});

export default eatReducer;

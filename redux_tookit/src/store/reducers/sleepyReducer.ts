import { createReducer } from "typesafe-actions";
import { SleepAction } from "../actions/sleepyAction";

interface SleepState {
  name: string;
  sleep: boolean;
}

const initialState: SleepState = {
  name: "tmddlr",
  sleep: false,
};

const sleepyReducer = createReducer<SleepState, SleepAction>(initialState, {
  SET_GO_SLEEP: (state) => ({ ...state, sleep: true }),
  SET_WAKE_SLEEP: (state) => ({ ...state, sleep: false }),
});

export default sleepyReducer;

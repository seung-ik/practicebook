import { ActionType, createAction } from "typesafe-actions";

const setGoSleep = createAction("SET_GO_SLEEP")();
const setWakeSleep = createAction("SET_WAKE_SLEEP")();

const actionTypes = {
  setGoSleep,
  setWakeSleep,
}

export type SleepAction = ActionType<typeof actionTypes>
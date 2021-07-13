import { ActionType, createAction } from "typesafe-actions";




export const setEatAction = createAction('SET_EAT_SIT')<string>();

const actionTypes = {
  setEatAction,
}

export type EatAction = ActionType<typeof actionTypes>;
import { ActionType, createAction } from "typesafe-actions";

const setAddMoneyAction = createAction("SET_INCOM_MONEY")<number>();
const setWithDrawAction = createAction("SET_WITHDRAW_MONEY")<number>();

const actionTypes = {
  setAddMoneyAction,
  setWithDrawAction,
}

export type MoneyAction = ActionType<typeof actionTypes>
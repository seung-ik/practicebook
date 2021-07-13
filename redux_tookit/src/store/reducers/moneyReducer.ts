import {createReducer} from 'typesafe-actions'
import { MoneyAction } from "../actions/moneyAction";

interface MoneyState{
  rich: number;
}

const initialState ={
  rich: 50000000,
}
const moneyReducer = createReducer<MoneyState,MoneyAction>(initialState,{
  SET_INCOM_MONEY:(state,{payload})=>({...state,rich:payload+state.rich}),
  SET_WITHDRAW_MONEY:(state,{payload})=>({...state,rich:payload-state.rich})
})

export default moneyReducer;
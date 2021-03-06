/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 3rd June 2018 4:40:37 pm
 * Last Modified: Thursday, 28th June 2018 11:45:03 am
 */
import { SET_WALLET, RESET, SET_TRANSACTION, SET_TRANSACTIONS } from '../actions/actionTypes';

const initialState = {
  balance: 0,
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WALLET:
      return action.payload;
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case RESET:
      return initialState;
    default:
      return state;
  }
};

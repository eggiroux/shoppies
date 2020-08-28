import { produce } from "immer";

const initialState = {};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      //console.log(state[action.item.id]);
      //return produce
    }

    default:
      return state;
  }
}

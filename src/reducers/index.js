import { produce } from "immer";

const initialState = { searchResults: [], nominatedList: [] };

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_RESULTS_FROM_API": {
      console.log("from reducers", action);
      return produce(state, (draftState) => {
        draftState.searchResults = action.resultsArray;
      });
    }
    case "ADD_ITEM": {
      //console.log(state[action.item.id]);
      //return produce
    }

    default:
      return state;
  }
}

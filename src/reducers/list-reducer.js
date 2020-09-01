import { produce } from "immer";

import { persistedState } from "../utils";
import { VALUES } from "../constants";

//call persisted state to grab a saved nomination list if it exists
//the initial state is still defined here to ease of use.
const initialState = persistedState(
  {
    status: "empty",
    nominations: {},
  },
  "nominations"
);

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_NOMINATIONS": {
      //console.log("from reducers", action);
      return produce(state, (draftState) => {
        draftState.status = "incomplete";
        draftState.nominations[action.movieId] = action.movie;
        if (
          Object.keys(draftState.nominations).length >= VALUES.MAX_ITEMS_ON_LIST
        ) {
          draftState.status = "complete";
        }
      });
    }
    case "REMOVE_MOVIE_FROM_NOMINATIONS": {
      //console.log("remove movie", action);
      return produce(state, (draftState) => {
        delete draftState.nominations[action.movieId];
        draftState.status = "incomplete";
        if (Object.keys(state.nominations).length === 1) {
          draftState.status = "empty";
        }
      });
    }
    case "SUBMIT_LIST": {
      //console.log("submit list", action);
      return produce(state, (draftState) => {
        draftState.status = "submitted";
      });
    }

    case "RESTART_LIST_PROCESS": {
      //console.log("remove movie", action);
      return produce(state, (draftState) => {
        draftState.status = "empty";
        draftState.nominations = {};
      });
    }

    default:
      return state;
  }
}

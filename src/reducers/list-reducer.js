import { produce } from "immer";

import { persistedState } from "../utils";
import { VALUES } from "../constants";

const initialState = persistedState({
  satus: "empty",
  nominations: {},
});

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
      });
    }
    case "SUBMIT_LIST": {
      console.log("submit list", action);
      return produce(state, (draftState) => {
        draftState.status = "submitted";
        draftState.nominations = {};
      });
    }

    case "RESTART_LIST_PROCESS": {
      //console.log("remove movie", action);
      return produce(state, (draftState) => {
        draftState.status = "empty";
      });
    }

    default:
      return state;
  }
}

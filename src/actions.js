export const searchResultsFromApi = (resultsArray) => ({
  type: "SEARCH_RESULTS_FROM_API",
  resultsArray,
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

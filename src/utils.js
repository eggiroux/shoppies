export const persistedState = (initialState, persistedKey) => {
  const savedState = localStorage.getItem(persistedKey);

  if (savedState) {
    //if localStorage had a "savedKey" saved, return the initial state with that list
    return { ...initialState, persistedKey: JSON.parse(savedState) };
  } else {
    //if not, then return initialState as is
    return initialState;
  }
};

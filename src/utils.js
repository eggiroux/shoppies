export const persistedState = (initialState) => {
  const savedState = localStorage.getItem("nominationsState");

  if (savedState) {
    return JSON.parse(savedState);
  } else {
    localStorage.setItem("nominationsState", JSON.stringify(initialState));
    return initialState;
  }
};

let initialState = {
  muz: 0,
};

export const muzReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EKLE":
      return {
        muz: state.muz + 1,
      };
    case "CIKAR":
      return {
        muz: state.muz - 1,
      };
    default:
      return state;
  }
};

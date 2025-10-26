export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "addProduct":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case "deleteProduct":
      return state.filter((product) => product.id !== action.payload);
    case "updateProduct":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return u;
      });
    case "loadingProducts":
      return action.payload;
    default:
      return state;
  }
}; 
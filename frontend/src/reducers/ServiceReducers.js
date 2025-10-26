export const serviceReducer = (state = [], action) => {
  switch (action.type) {
    case "addService":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case "deleteService":
      return state.filter((service) => service.id !== action.payload);
    case "updateService":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
            password: u.password,
          };
        }
        return u;
      });
    case "loadingServices":
      return action.payload;
    default:
      return state;
  }
};

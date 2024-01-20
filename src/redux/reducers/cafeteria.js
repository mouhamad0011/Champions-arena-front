const cafeteriaReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllCafeteriaItems":
        return action.payload;
      case "addItemToCafeteria":
        return [...state, action.payload];
      case "deleteItemFromCafeteria":
        return state.filter((item) => item._id !== action.payload);
      case "updateItemCafeteria":
        return state.map((item) =>
          item._id === action.payload.Id ? action.payload.item : item
        );
      default:
        return state;
    }
  };
  export default cafeteriaReducer;
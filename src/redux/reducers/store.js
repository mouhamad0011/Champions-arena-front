const storeReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllStoreItems":
        return action.payload;
      case "addItemToStore":
        return [...state, action.payload];
      case "deleteItemFromStore":
        return state.filter((item) => item._id !== action.payload);
      case "updateItemStore":
        return state.map((item) =>
          item._id === action.payload.Id ? action.payload.item : item
        );
      default:
        return state;
    }
  };
  export default storeReducer;
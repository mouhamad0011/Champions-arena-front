const eventReducer = (state = [], action) => {
    switch (action.type) {
      case "getAllEvents":
        return action.payload;
      case "addEvent":
        return [...state, action.payload];
      case "deleteEvent":
        return state.filter((event) => event._id !== action.payload);
      case "updateEvent":
        return state.map((event) =>
          event._id === action.payload.Id ? action.payload.event : event
        );
      default:
        return state;
    }
  };
  export default eventReducer;
const bookingReducer = (state = [], action) => {
  switch (action.type) {
    case "getAllBookings":
      return action.payload;
    case "getBookingsByUserId":
      return action.payload;
    case "getBookingsByDateAndTerrain":
      return action.payload;
    case "getBookingsBydate":
      return action.payload;
    case "addBookingByAdmin":
      return [...state, action.payload.booking];
    case "addBookingByUser":
      return [...state, action.payload.booking];
    case "deleteBooking":
      return state.filter((booking) => booking._id !== action.payload);
    case "updateBooking":
      return state.map((booking) =>
        booking._id === action.payload.Id ? action.payload.booking : booking
      );
    default:
      return state;
  }
};
export default bookingReducer;

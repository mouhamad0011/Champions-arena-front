import axios from "axios";

export const getAllBookings = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/bookings/getAll`)
      .then((response) => {
        const bookings = response.data.bookings;
        dispatch({
          type: "getAllBookings",
          payload: bookings
        });
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
  };
};

export const getBookingsByDateAndName = (terrainId, date) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/bookings/getBookingsByDateAndName`, {terrainId, date})
      .then((response) => {
        const bookings = response.data.bookings;
        console.log(response)
        dispatch({
          type: "getBookingsByDateAndName",
          payload: bookings
        });
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
  };
};

export const addBookingByAdmin = (firstName, lastName, email, terrainId, date, time, duration, bill) => {
    const newBooking = {
        firstName, lastName, email, terrainId, date, time, duration, bill
    }
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/bookings/addByAdmin`, newBooking)
      .then((response) => {
        const booking = response.data.newBooking;
        dispatch({
          type: "addBookingByAdmin",
          payload: booking
        });
      })
      .catch((error) => {
        console.error("Error while adding booking", error);
      });
  };
};

export const addBookingByUser = (userId, terrainId, date, time, duration, bill) => {
    const newBooking = {
        userId, terrainId, date, time, duration, bill
    }
  return (dispatch) => {
    return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/bookings/addByUser`, newBooking)
      .then((response) => {
        const booking = response.data.newBooking;
        dispatch({
          type: "addBookingByUser",
          payload: booking
        });
        resolve();
      })
      .catch((error) => {
        console.error("Error while adding booking", error);
        reject();
      });
    });
};
};

export const deleteBooking = (Id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/bookings/delete/${Id}`)
      .then(() => {
        dispatch({
          type: "deleteBooking",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };
};

export const updateBooking = (Id, newBooking) => {
  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND}/bookings/update/${Id}`, newBooking)
      .then((response) => {
        const booking = response.data.newBooking;
        dispatch({
          type: "updateBooking",
          payload: { booking, Id },
        });
      })
      .catch((error) => {
        console.error("Error while updating Booking", error);
      });
  };
};

export const getBookingsBydate = (date) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/bookings/getByDate`,{ date })
      .then((response) => {
        const bookings = response.data.bookings;
        dispatch({
          type: "getBookingsBydate",
          payload: bookings
        });
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
  };
};

export const getBookingsByUserId = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/bookings/getByUserId/${id}`)
      .then((response) => {
        const bookings = response.data.bookings;
        dispatch({
          type: "getBookingsByUserId",
          payload: bookings
        });
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
  };
};

export const getBookingsByDateAndTerrain = (date, terrainId) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/bookings/getByDateAndTerrain`, {date, terrainId})
      .then((response) => {
        const bookings = response.data.combinedArray;
        dispatch({
          type: "getBookingsByDateAndTerrain",
          payload: bookings
        });
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
  };
};
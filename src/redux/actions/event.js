import axios from "axios";

export const getAllEvents = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/events/getAll`)
      .then((response) => {
        const events = response.data.events;
        dispatch({
          type: "getAllEvents",
          payload: events
        });
      })
      .catch((error) => {
        console.error("Error while getting events:", error);
      });
  };
};

export const addEvent = (terrainId, price, image, date, time, duration, title, description) => {

  return (dispatch) => {
    const formData = new FormData();
    formData.append("terrainId", terrainId);
    formData.append("price", price);
    formData.append("file", image);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("duration", duration);
    formData.append("title", title);
    formData.append("description", description);

    axios
      .post(`${process.env.REACT_APP_BACKEND}/events/add`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((response) => {
        const event = response.data.newEvent;
        dispatch({
          type: "addEvent",
          payload: event
        });
      })
      .catch((error) => {
        console.error("Error while adding event", error);
      });
  };
};

export const deleteEvent = (Id, token) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/events/delete/${Id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then(() => {
        dispatch({
          type: "deleteEvent",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };
};

export const updateEvent = (Id, token, terrainId, price, image, date, time, duration, title, description) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("terrainId", terrainId);
    formData.append("price", price);
    formData.append("file", image);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("duration", duration);
    formData.append("title", title);
    formData.append("description", description);
    axios
      .put(`${process.env.REACT_APP_BACKEND}/events/update/${Id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          'authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        const event = response.data.newEvent;
        dispatch({
          type: "updateEvents",
          payload: { event, Id },
        });
      })
      .catch((error) => {
        console.error("Error while updating event", error);
      });
  };
};

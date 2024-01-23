import axios from "axios";

export const getAllStoreItems = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/store/getAll`)
      .then((response) => {
        const items = response.data.items;
        dispatch({
          type: "getAllStoreItems",
          payload: items,
        });
      })
      .catch((error) => {
        console.error("Error while getting items:", error);
      });
  };
};

export const addItemToStore = (item, price, info, image) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("item", item);
    formData.append("price", price);
    formData.append("info", info);
    formData.append("file", image);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/store/add`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const item = response.data.newItem;
        dispatch({
          type: "addItemToStore",
          payload: item,
        });
      })
      .catch((error) => {
        console.error("Error while adding an item", error);
      });
  };
};

export const deleteItemFromStore = (Id, token) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/store/delete/${Id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then(() => {
        dispatch({
          type: "deleteItemFromStore",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };
};

export const updateItemStore = (Id, token, item, price, info, image) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("item", item);
    formData.append("price", price);
    formData.append("info", info);
    formData.append("file", image);
    axios
      .put(`${process.env.REACT_APP_BACKEND}/store/update/${Id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        const item = response.data.newItem;
        dispatch({
          type: "updateItemStore",
          payload: { item, Id },
        });
      })
      .catch((error) => {
        console.error("Error while updating item:", error);
      });
  };
};

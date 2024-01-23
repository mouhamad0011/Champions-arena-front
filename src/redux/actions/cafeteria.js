import axios from "axios";

export const getAllCafeteriaItems = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/cafeteria/getAll`)
      .then((response) => {
        const items = response.data.items;
        dispatch({
          type: "getAllCafeteriaItems",
          payload: items
        });
      })
      .catch((error) => {
        console.error("Error while getting items:", error);
      });
  };
};

export const addItemToCafeteria = (item, image, price) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("item", item);
    formData.append("price", price);
    formData.append("file", image);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/cafeteria/add`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const item = response.data.newItem;
        dispatch({
          type: "addItemToCafeteria",
          payload: item
        });
      })
      .catch((error) => {
        console.error("Error while adding an item", error);
      });
  };
};

export const deleteItemFromCafeteria = (Id, token) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/cafeteria/delete/${Id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
      .then(() => {
        dispatch({
          type: "deleteItemFromCafeteria",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };
};

export const updateItemCafeteria = (Id,token, item, price, image) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("item", item);
    formData.append("price", price);
    formData.append("file", image);
    axios
      .put(`${process.env.REACT_APP_BACKEND}/cafeteria/update/${Id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'authorization': `Bearer ${token}`
        },
      })
      .then((response) => {
        const item = response.data.newItem;
        dispatch({
          type: "updateItemCafeteria",
          payload: { item, Id },
        });
      })
      .catch((error) => {
        console.error("Error while updating item:", error);
      });
  };
};

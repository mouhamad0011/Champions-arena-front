import axios from "axios";

export const getAllTerrains = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/terrains/getAll`)
      .then((response) => {
        const terrains = response.data.terrains;
        dispatch({
          type: "getAllTerrains",
          payload: terrains
        });
      })
      .catch((error) => {
        console.error("Error while getting terrains:", error);
      });
  };
};

export const getTerrainsBySport = (sport) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/terrains/getBySport`,{sport})
      .then((response) => {
        const terrains = response.data.terrains;
        dispatch({
          type: "getTerrainsBySport",
          payload: terrains
        });
      })
      .catch((error) => {
        console.error("Error while getting terrains:", error);
      });
  };
};

export const addTerrain = (name, sport, available, hourPrice, image, dimensions) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("sport", sport);
  formData.append("available", available);
  formData.append("hourPrice", hourPrice);
  formData.append("file", image);
  formData.append("dimensions", dimensions);
  
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/terrains/add`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const terrain = response.data.newTerrain;
        dispatch({
          type: "addTerrain",
          payload: terrain
        });
      })
      .catch((error) => {
        console.error("Error while adding terrain", error);
      });
  };
};

export const deleteTerrain = (Id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/terrains/delete/${Id}`)
      .then(() => {
        dispatch({
          type: "deleteTerrain",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };
};

export const updateTerrain = (Id, name, sport, available, hourPrice, image, dimensions) => {
  return (dispatch) => {
    const formData = new FormData();
  formData.append("name", name);
  formData.append("sport", sport);
  formData.append("available", available);
  formData.append("hourPrice", hourPrice);
  formData.append("dimensions", dimensions);
  formData.append("file", image);
    axios
      .put(`${process.env.REACT_APP_BACKEND}/terrains/update/${Id}`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const terrain = response.data.newTerrain;
        dispatch({
          type: "updateTerrain",
          payload: { terrain, Id },
        });
      })
      .catch((error) => {
        console.error("Error while updating terrain:", error);
      });
  };
};

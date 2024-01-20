import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/users/getAll`)
      .then((response) => {
        const users = response.data.users;
        dispatch({
          type: "getAllUsers",
          payload: users,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const getUserById = (Id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/users/getById/${Id}`)
      .then((response) => {
        const user = response.data.user;
        dispatch({
          type: "getUserById",
          payload: user,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND}/users/login`, { email, password })
        .then((response) => {
          const token = response.data.token;
          const id = response.data.id;
          dispatch({
            type: "login",
            payload: { token, id },
          });
          localStorage.setItem("token",token);
          resolve(); 
        })
        .catch((error) => {
          reject(error); 
        });
    });
  };
};


  export const register = (firstName, lastName, email, password) => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      role: "user",
    };
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_BACKEND}/users/register`, newUser)
        .then((response) => {
          const user = response.data.user;
          dispatch({
            type: "register",
            payload: user
          });
          return user;
        })
        .catch((error) => {
            console.error("Error while registration:", error);
            throw error;
        });
    };
   };

   export const deleteUser = (Id) => {
    return (dispatch) => {
      axios
        .delete(`${process.env.REACT_APP_BACKEND}/users/delete/${Id}`)
        .then(() => {
          dispatch({
            type: "deleteUser",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error while deleting:", error);
        });
    };
  };
  
  export const updateUser = (
    Id,
    firstName,
    lastName,
    email,
    password,
  ) => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
    return (dispatch) => {
      axios
        .put(`${process.env.REACT_APP_BACKEND}/users/update/${Id}`, newUser)
        .then((response) => {
          const user = response.data.user;
          dispatch({
            type: "updateUser",
            payload: { user, Id },
          });
        })
        .catch((error) => {
          console.error("Error while updating user:", error);
        });
    };
  };
  
 
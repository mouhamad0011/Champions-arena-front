import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/champions-arena-logo.png";
import UserNew from "./UserNew";
import "./home.css";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserID } from "../UserInfo/GetUserInfo";
import {
  getBookingsByUserId,
  deleteBooking,
} from "../redux/actions/booking";
import { getAllTerrains } from "../redux/actions/terrain";
import Example2 from "../loading/Example2";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

const UserDash = () => {
  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
  };
  const userId = getUserID();
  const [dash, setDash] = useState("old");
  const [loading, setLoading] = useState(false);
  const [stads, setStads] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);
    const handleToggle = () => {
      const bars = document.querySelector(".bars");
      bars.classList.toggle("active");
    };
    const handleMenu = () => {
      setBurgerMenu(!burgerMenu);
    };
  
  var bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingsByUserId(userId));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        header: "Id",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "terrainId.name",
        header: "Stad Name",
        size: 150,
        enableEditing: true,
        editVariant: "select",
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "time",
        header: "Time",
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "duration",
        header: "Duration",
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "bill",
        header: "Bill",
        size: 50,
        enableEditing: true,
      },
    ],
    []
  );

  

  

  
  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteBooking(row.original._id));
    }
  };
 console.log(bookings)
  
  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: bookings,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  if (loading) {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Example2 />
        </div>
      </>
    );
  }
  return (
    <>
      <header className="header" style={{ backgroundColor: "#333" }}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="title" style={{ color: "white" }}>
          CHAMPIONS ARENA
        </div>
        <ul className="menu">
          <li style={{ color: "white" }} onClick={() => setDash("old")}>
            Your bookings
          </li>
          <li style={{ color: "white" }} onClick={() => setDash("new")}>
            Book now
          </li>
        </ul>

        <div className="reg-lan">
          <button className="reg-button">
            {!token ? (
              <Link to="/connect" className="link">
                Connect
              </Link>
            ) : (
              <Link to="" className="link" onClick={handlelogout}>
                Log out
              </Link>
            )}
          </button>
        </div>
      </header>
      <header className="phone-header" style={{ backgroundColor: "#333" }}>
        <Link to="/">
          <img src={logo} alt="logo" className="phone-logo" />
        </Link>
        <div className="phone-title" style={{ color: "white" }}>
          CHAMPIONS ARENA
        </div>
        <div className="phone-reg-lan">
          <button className="phone-reg-button">
            {!token ? (
              <Link to="/connect" className="link">
                Connect
              </Link>
            ) : (
              <Link to="" className="link" onClick={handlelogout}>
                Log out
              </Link>
            )}
          </button>
          <button className="phone-reg-button">Revenue</button>
        </div>
        <div className="trigger" onClick={handleMenu}>
          <svg className="bars" viewBox="0 0 100 100" onClick={handleToggle}>
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            ></path>
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            ></path>
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            ></path>
          </svg>
        </div>
        {burgerMenu && (
          <ul className="phone-menu" style={{ zIndex: "10" }}>
            <li style={{ color: "white" }}>Users</li>
            <li style={{ color: "white" }}>Stadiums</li>
            <li style={{ color: "white" }}>Store</li>
            <li style={{ color: "white" }}>Cafeteria</li>
            <li style={{ color: "white" }}>Bookings</li>
            <li style={{ color: "white" }}>Events</li>
          </ul>
        )}
      </header>

      { dash === "old" &&<MaterialReactTable table={table} />}
      { dash === "new" &&<UserNew />}

    </>
  );
};

export default UserDash;

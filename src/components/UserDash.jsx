import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/champions-arena-logo.png";
import "./home.css";
import Popup from "./Popup";
import axios from "axios";
import bcrypt from "bcryptjs";
import { toast } from "react-hot-toast";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_EditActionButtons,
} from "material-react-table";
import { getUserById, updateProfile } from "../redux/actions/user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserID } from "../UserInfo/GetUserInfo";
import {
  getBookingsByUserId,
  deleteBooking,
  addBookingByUser,
  getBookingsByDateAndTerrain,
} from "../redux/actions/booking";
import { getAllTerrains } from "../redux/actions/terrain";
import Example2 from "../loading/Example2";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Modal,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const UserDash = () => {
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(null);
  const terrains = useSelector((state) => state.terrains);
  const bookings = useSelector((state) => state.bookings);
  const users = useSelector((state) => state.users);
  const token = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
  };
  const userId = getUserID();
  const [bookingsById, setBookingsById] = useState([]);
  const [stadium, setStadium] = useState("Grand terrain");
  const [terrainId, setTerrainId] = useState("65a26f3e1c912c4b41ccc4a7");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [hourPrice, setHourPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [stads, setStads] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cNewPassword, setCNewPassword] = useState("");
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const handleClose = () => {
    setEditProfile(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
    height: "fit-content",
    maxWidth: "90%",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleToggle = () => {
    const bars = document.querySelector(".bars");
    bars.classList.toggle("active");
  };
  const handleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getBookingsByUserId(userId));
    axios
      .get(`${process.env.REACT_APP_BACKEND}/bookings/getByUserId/${userId}`)
      .then((response) => {
        const bookings = response.data.bookings;
        setBookingsById(bookings);
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    dispatch(getAllTerrains());
    dispatch(getUserById(userId));
  }, [dispatch]);

  useEffect(() => {
    if (terrains && stads.length === 0) {
      setStads(
        terrains.map((terrain) => ({
          _id: terrain._id,
          name: terrain.name,
          hourPrice: terrain.hourPrice,
        }))
      );
    }
  }, [terrains, stads]);

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

  const currentDate = new Date().toISOString().split("T")[0];

  const oneHourSlots = [
    "6h - 7h",
    "7h - 8h",
    "8h - 9h",
    "9h - 10h",
    "10h - 11h",
    "11h - 12h",
    "12h - 13h",
    "13h - 14h",
    "14h - 15h",
    "15h - 16h",
    "16h - 17h",
    "17h - 18h",
    "18h - 19h",
    "19h - 20h",
    "20h - 21h",
    "21h - 22h",
    "22h - 23h",
    "23h - 24h",
  ];

  useEffect(() => {
    const newDate = date.split("-");
    const datee = newDate[2] + "-" + newDate[1] + "-" + newDate[0];
    dispatch(getBookingsByDateAndTerrain(datee, terrainId));
  }, [date, terrainId]);

  const timesToRemove = bookings
    ?.map((booking) => booking?.time)
    ?.filter((time) => time !== undefined);
  var timesSeparated = [];
  if (timesToRemove.length > 0) {
    timesToRemove.forEach((time) => {
      const tab = time?.split(" - ");
      var nb1;
      var nb2;
      if (tab[0].length === 2) {
        nb1 = tab[0].substring(0, 1);
      } else {
        nb1 = tab[0].substring(0, 2);
      }
      if (tab[1].length === 2) {
        nb2 = tab[1].substring(0, 1);
      } else {
        nb2 = tab[1].substring(0, 2);
      }
      if (nb2 - nb1 === 1) {
        timesSeparated.push(time);
      } else {
        nb1 = parseInt(nb1, 10);
        nb2 = parseInt(nb2, 10);
        timesSeparated.push(`${nb1}h - ${nb1 + 1}h`);
        timesSeparated.push(`${nb1 + 1}h - ${nb2}h`);
      }
    });
    //console.log(timesToRemove);
    //   console.log(timesToRemove[1].split(" - "))
    //  console.log(timesToRemove[1].split(" - ")[1].substring(0, 2) - timesToRemove[1].split(" - ")[0].substring(0, 2))
    //console.log(timesToRemove[0].split(" - ")[1].length)
  }
  const filteredSlots = oneHourSlots?.filter(
    (slot) => !timesSeparated?.includes(slot)
  );

  const getTwoHourIntervals = () => {
    var intervals = [];
    for (let i = 0; i < oneHourSlots.length - 1; i += 2) {
      intervals.push(
        `${oneHourSlots[i]?.split(" ")[0]} - ${
          oneHourSlots[i + 1]?.split(" ")[2]
        }`
      );
    }
    return intervals;
  };

  const twoHourIntervals = getTwoHourIntervals();
  const bookedTimes = bookings?.map((item) => item?.time);

  const doIntervalsOverlap = (interval1, interval2 = "") => {
    console.log(interval1);
    console.log(interval2);
    const [start1, end1] = interval1.split(" - ");
    const [start2, end2] = interval2.split(" - ");
    return end1 > start2 && start1 < end2;
  };

  const availableIntervals = twoHourIntervals.filter((interval) => {
    for (const bookedTime of bookedTimes) {
      if (doIntervalsOverlap(interval, bookedTime)) {
        return false;
      }
    }
    return true;
  });

  const handleCreateUser = async ({ values, table }) => {
    const bill = duration * hourPrice;
    const datee = date?.split("-");
    const newDate = datee[2] + "-" + datee[1] + "-" + datee[0];

    dispatch(
      addBookingByUser(userId, terrainId, newDate, time, duration, bill)
    );
    setLoading(true);
    setTimeout(async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/bookings/getByUserId/${userId}`)
        .then((response) => {
          const bookings = response.data.bookings;
          setBookingsById(bookings);
        })
        .catch((error) => {
          console.error("Error while getting bookings:", error);
        });
      table.setCreatingRow(null);
      setLoading(false);
      toast.success("Booking added successfully");
    }, 3000);
  };
  const handleDelete = async (id) => {
    await axios
        .delete(
          `${process.env.REACT_APP_BACKEND}/bookings/delete/${id}`
        )
        .then(() => {
          setBookingsById((prevBookings) =>
            prevBookings?.filter((booking) => booking._id !== id)
          );
          setOpenDeleteConfirmModal(null);
        })
        .catch((error) => {
          console.error("Error while deleting:", error);
        });
    
  };


  const handleProfile = async (e) => {
    e.preventDefault();
    const match = await bcrypt.compare(password, users.password);
    const nameTest = /^[A-Za-z]+$/;
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordTest =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (firstName !== "" && !nameTest.test(firstName.trim())) {
      toast.error("Firstname should only contain letters*");
      return;
    } else if (lastName !== "" && !nameTest.test(lastName.trim())) {
      toast.error("Lastname should only contain letters");
      return;
    } else if (email !== "" && !emailTest.test(email.trim())) {
      toast.error("Invalid email pattern(e.g., user@example.com)");
      return;
    }
    if (!match) {
      toast.error("You should enter your old password");
      return;
    } else if (newPassword !== "" && !passwordTest.test(newPassword.trim())) {
      toast.error(
        "Your password should contain at least 8 characters, one lowercase, one uppercase, one digit and one special char"
      );
      return;
    } else if (
      newPassword !== "" &&
      newPassword.trim() !== cNewPassword.trim()
    ) {
      toast.error("Passwords do not match");
      return;
    } else {
      const updatedFirstName =
        firstName.trim() !== "" ? firstName : users.firstName;
      const updatedLastName =
        lastName.trim() !== "" ? lastName : users.lastName;
      const updatedEmail = email.trim() !== "" ? email : users.email;
      if (newPassword !== "") {
        dispatch(
          updateProfile(
            users._id,
            updatedFirstName,
            updatedLastName,
            updatedEmail,
            newPassword
          )
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNewPassword("");
        setCNewPassword("");
        setEditProfile(false);
        toast.success("Profile updated successfully!");
      } else {
        dispatch(
          updateProfile(
            users._id,
            updatedFirstName,
            updatedLastName,
            updatedEmail
          )
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNewPassword("");
        setCNewPassword("");
        setEditProfile(false);
        toast.success("Profile updated successfully!");
      }
    }
  };

  console.log("bookings: ", bookings);

  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: bookingsById,
    enableEditing: true,
    onCreatingRowSave: handleCreateUser,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal",
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => setOpenDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderCreateRowDialogContent: ({ table, row }) => (
      <>
        <DialogTitle variant="h3">Add New Booking</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "20px",
          }}
        >
          <Select
            defaultValue="65a26f3e1c912c4b41ccc4a7"
            onChange={(event) => {
              setTerrainId(event.target.value);
            }}
            required
          >
            {stads &&
              stads.map((stad, index) => (
                <MenuItem
                  value={stad._id}
                  key={index}
                  onClick={() => setHourPrice(stad.hourPrice)}
                >
                  {stad.name}
                </MenuItem>
              ))}
          </Select>
          <TextField
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
            InputProps={{ inputProps: { min: currentDate } }}
          />
          <FormControl>
            <FormLabel>Duration</FormLabel>
            <RadioGroup
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="One hour"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Two hours"
              />
            </RadioGroup>
          </FormControl>
          <Select
            defaultValue={"6h - 7h" || "6h - 8h"}
            onChange={(event) => {
              setTime(event.target.value);
            }}
            required
          >
            <MenuItem disabled>Choose a time</MenuItem>
            {duration && duration == 1 && filteredSlots
              ? filteredSlots.map((slot, index) => (
                  <MenuItem value={slot} key={index}>
                    {slot}
                  </MenuItem>
                ))
              : availableIntervals.map((slot, index) => (
                  <MenuItem value={slot} key={index}>
                    {slot}
                  </MenuItem>
                ))}
          </Select>
          <TextField type="text" value={`Total: ${duration * hourPrice}$`} />
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderTopToolbarCustomActions: ({ table, row }) => (
      <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
        <Button
          variant="contained"
          onClick={() => {
            table.setCreatingRow(true);
          }}
          style={{
            backgroundColor: "#d21034",
            padding: "10px",
            textTransform: "none",
            fontSize: "20px",
          }}
        >
          Add new booking
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#d21034",
            padding: "10px",
            textTransform: "none",
            fontSize: "20px",
          }}
          onClick={() => setEditProfile(true)}
        >
          Edit profile
        </Button>
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
          <li style={{ color: "white" }}>Your bookings</li>
        </ul>

        <div className="reg-lan">
          <button className="reg-button">
            {!token ? (
              <Link to="/connect" className="link">
                Connect
              </Link>
            ) : (
              <Link to="/connect" className="link" onClick={handlelogout}>
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
              <Link to="/connect" className="link" onClick={handlelogout}>
                Log out
              </Link>
            )}
          </button>
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
          <ul className="phone-menu" style={{zIndex: "3"}}>
            <li style={{ color: "white" }}>Your bookings</li>
          </ul>
        )}
      </header>
      <MaterialReactTable table={table} />
   { openDeleteConfirmModal !== null &&
    <Popup
    title="Are you sure you want to delete this booking?"
    cancelLabel="Cancel"
    confirmLabel="Delete"
    onReject={() => {
      setOpenDeleteConfirmModal(null);
    }}
    onAccept={() => handleDelete(openDeleteConfirmModal.original._id)}
  />
   }
      <Modal
        open={editProfile}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span
            onClick={handleClose}
            className="box-close"
            style={{ fontSize: "25px" }}
          >
            &#x2715;
          </span>
          <DialogTitle variant="h3">Edit Profile</DialogTitle>
          <TextField
            type="text"
            label={users && users.firstName}
            style={{ width: "280px" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            type="text"
            label={users && users.lastName}
            style={{ width: "280px" }}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            type="email"
            label={users && users.email}
            style={{ width: "280px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Enter your old password"
            style={{ width: "280px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            type="password"
            label="Enter your new password"
            style={{ width: "280px" }}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="Confirm your new password"
            style={{ width: "280px" }}
            onChange={(e) => setCNewPassword(e.target.value)}
          />
          <div style={{ marginLeft: "118px" }}>
            <Button onClick={() => setEditProfile(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleProfile}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default UserDash;

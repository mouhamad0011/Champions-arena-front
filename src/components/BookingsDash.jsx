import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Popup from "./Popup";
import { toast } from "react-hot-toast";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  // type MRT_ColumnDef,
  // type MRT_Row,
  // type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addBookingByAdmin,
  addBookingByUser,
  getBookingsByDateAndTerrain,
} from "../redux/actions/booking";
import { getAllTerrains } from "../redux/actions/terrain";
import Example2 from "../loading/Example2";
import EditIcon from "@mui/icons-material/Edit";
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

const BookingsDash = () => {
  const bookings = useSelector((state) => state.bookings);
  const terrains = useSelector((state) => state.terrains);
  const dispatch = useDispatch();
  const [terrainId, setTerrainId] = useState("65a26f3e1c912c4b41ccc4a7");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [hourPrice, setHourPrice] = useState("");
  const [stads, setStads] = useState([]);
  const [allBookings, setAllBookings] = useState([]);

  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(null);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/bookings/getAll`)
      .then((response) => {
        const bookings = response.data.bookings;
        setAllBookings(bookings);
      })
      .catch((error) => {
        console.error("Error while getting bookings:", error);
      });
    dispatch(getAllTerrains());
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
        header: "Stadium name",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "firstName",
        header: "First name",
        Cell: ({ row }) =>
          row.original.userId ? (
            <td>{row.original.userId.firstName}</td>
          ) : (
            <td>{row.original.firstName}</td>
          ),
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "lastName",
        header: "Last name",
        Cell: ({ row }) =>
          row.original.userId ? (
            <td>{row.original.userId.lastName}</td>
          ) : (
            <td>{row.original.lastName}</td>
          ),
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        Cell: ({ row }) =>
          row.original.userId ? (
            <td>{row.original.userId.email}</td>
          ) : (
            <td>{row.original.email}</td>
          ),
        size: 100,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "time",
        header: "Time",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "duration",
        header: "Duration",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "bill",
        header: "Bill",
        size: 0,
        enableEditing: false,
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
    (slot) => !timesSeparated.includes(slot)
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
    const [start1, end1] = interval1.split(" - ");
    const [start2, end2] = interval2.split(" - ");
    return end1 > start2 && start1 < end2;
  };

  const availableIntervals = twoHourIntervals?.filter((interval) => {
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
      addBookingByAdmin(
        firstName,
        lastName,
        email,
        terrainId,
        newDate,
        time,
        duration,
        bill
      )
    );
    await axios.post(`${process.env.REACT_APP_BACKEND}/mail/sendEmail`,{firstName, lastName, email, date:newDate, time})
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
    setLoading(true);
    setTimeout(async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/bookings/getAll`)
        .then((response) => {
          const bookings = response.data.bookings;
          setAllBookings(bookings);
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
      .delete(`${process.env.REACT_APP_BACKEND}/bookings/delete/${id}`)
      .then(() => {
        setAllBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== id)
        );
        setOpenDeleteConfirmModal(null);
      })
      .catch((error) => {
        console.error("Error while deleting:", error);
      });
  };


  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: allBookings,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    onCreatingRowSave: handleCreateUser,
    getRowId: (row) => row.id,

    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
        }}
        style={{
          backgroundColor: "#d21034",
          padding: "10px",
          textTransform: "none",
          fontSize: "20px",
        }}
      >
        Add booking
      </Button>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton
            color="error"
            onClick={() => setOpenDeleteConfirmModal(row)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderCreateRowDialogContent: ({ table, row }) => (
      <>
        <DialogTitle variant="h3">Add new booking</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "20px",
          }}
        >
          <TextField
            type="text"
            label="first name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="last name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <TextField
            type="email"
            label="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
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
  });
  if (openDeleteConfirmModal !== null) {
    return (
      <div>
        <MaterialReactTable table={table} />
        <Popup
          title="Are you sure you want to delete this booking?"
          cancelLabel="Cancel"
          confirmLabel="Delete"
          onReject={() => {
            setOpenDeleteConfirmModal(null);
          }}
          onAccept={() => handleDelete(openDeleteConfirmModal.original._id)}
        />
      </div>
    );
  }
  if (allBookings.length === 0 || loading) {
    return (
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
    );
  }
  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default BookingsDash;

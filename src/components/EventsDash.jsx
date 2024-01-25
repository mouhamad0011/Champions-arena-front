import { useMemo, useEffect, useState } from "react";
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
  getAllEvents,
  updateEvent,
  deleteEvent,
  addEvent,
} from "../redux/actions/event";
import {
  getAllBookings,
  getBookingsBydate,
  addBookingByAdmin,
} from "../redux/actions/booking";
import { getAllTerrains } from "../redux/actions/terrain";
import Example2 from "../loading/Example2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  TextField,
  Select,
  MenuItem
} from "@mui/material";

const EventsDash = () => {
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(null);
  const events = useSelector((state) => state.events);
  const terrains = useSelector((state) => state.terrains);
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [terrainId, setTerrainId] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [stads, setStads] = useState([]);

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllTerrains());
  }, [dispatch]);
  useEffect(() => {
    if (terrains && stads.length === 0) {
      setStads(
        terrains.map((terrain) => ({ _id: terrain._id, name: terrain.name }))
      );
    }
  }, [terrains, stads]);


  const currentDate = new Date().toISOString().split('T')[0];

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
        size: 150,
        enableEditing: true,
        editVariant: "select",
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
        enableEditing: true,
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
        size: 50,
        enableEditing: true,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
        Cell: ({ row }) => (
          <div>
            {row.original.description.length > 20
              ? row.original.description.substring(0, 20) + "..."
              : row.original.description}
          </div>
        ),
      },
      {
        accessorKey: "image",
        header: "Image",
        Cell: ({ row }) => (
          <img
            style={{ width: "100px", height: "100px" }}
            src={row.original.image}
          />
        ),
        size: 200,
        enableEditing: true,
      },
    ],
    []
  );
 const token = localStorage.getItem("token");
  const handleCreateItem = async ({ values, table }) => {

    const datee= date.split("-");
    const newDate = datee[2]+"-"+datee[1]+"-"+datee[0];


    dispatch(
      addEvent(terrainId, price, file, newDate, time, duration, title, description)
    );
    table.setCreatingRow(null); //exit creating mode
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setFile(null);
    setTerrainId("");
    setPrice("");
    setDate("");
    setTime("");
    setTitle("");
    setDescription("");
    setDuration("");
  };

  const handleSaveUser = async ({ row, values, table }) => {
   
    const newId = terrainId ==="" ? values.terrainId : terrainId;
    console.log(newId)
    const newPrice = price ==="" ? values.price : price;
    const newDate = date ==="" ? values.date : date;
    const newTime = time ==="" ? values.time : time;
    const newTitle = title ==="" ? values.title : title;
    const newDesc = description ==="" ? values.description : description;
    const newDuration = duration ==="" ? values.duration : duration;

    dispatch(updateEvent(row.original._id, token, newId, newPrice, file, newDate, newTime, newDuration, newTitle, newDesc ));
    table.setEditingRow(null); //exit editing mode
  };

  const handleDelete = async (id) => {
    dispatch(deleteEvent(id, token));
    toast.success("event deleted successfully");
    setOpenDeleteConfirmModal(null);
  };

  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: events,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    onCreatingRowSave: handleCreateItem,
    getRowId: (row) => row.id,
    //enableStickyHeader:true,
    onEditingRowSave: handleSaveUser,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Add new event</DialogTitle>
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
              console.log(event.target.value)
            }}
            required
          >
            {stads &&
              stads.map((stad, index) => (
                <MenuItem value={stad._id} key={index}>
                  {stad.name}
                </MenuItem>
              ))}
          </Select>
          <TextField
            type="number"
            label="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
            InputProps={{ inputProps: { min: currentDate } }}
          />
           <TextField
            type="text"
            label="time"
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
           <TextField
            type="number"
            label="duration"
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          />
           <TextField
            type="text"
            label="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
           <TextField
            type="text"
            label="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <TextField
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row }) => (
      <>
        <DialogTitle variant="h3">Edit event</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
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
                <MenuItem value={stad._id} key={index}>
                  {stad.name}
                </MenuItem>
              ))}
          </Select>
          <TextField
            type="number"
            label={row.original.price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
            InputProps={{ inputProps: { min: currentDate } }}
          />
           <TextField
            type="text"
            label={row.original.time}
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
           <TextField
            type="number"
            label={row.original.duration}
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          />
           <TextField
            type="text"
            label={row.original.title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
           <TextField
            type="text"
            label={row.original.description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <TextField
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
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
        Add new event
      </Button>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => setOpenDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  if (openDeleteConfirmModal !== null) {
    return(
    <div>
      <MaterialReactTable table={table} />
      <Popup
        title="Are you sure you want to delete this event?"
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
  if (events.length === 0 || loading) {
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

export default EventsDash;

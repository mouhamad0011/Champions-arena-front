import { useMemo, useEffect, useState } from "react";
import "./home.css"
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
  getAllBookings,
  updateBooking,
  deleteBooking,
  addBookingByAdmin,
} from "../redux/actions/booking";
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
} from "@mui/material";

const BookingsDash = () => {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [terrainId, setTerrainId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [bill, setBill] = useState("");
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);


  function dataHasField(field) {
    // Check if any booking in the array has the specified field
    return bookings.some(booking => Object.prototype.hasOwnProperty.call(booking, field));
  }
  
  const columns = useMemo(
    () => 
    [
      {
        accessorKey: "_id",
        header: "Id",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "terrainId.name",
        header: "Stad Name",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "firstName",
        header: "First Name",
      Cell: ({ row }) => (
        row.original.userId ?
         <td>
            {row.original.userId.firstName}
         </td>
         :
         <td>
            {row.original.firstName}
         </td>
      ),
      size: 100,
      enableEditing: true
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      Cell: ({ row }) => (
        row.original.userId ?
         <td>
            {row.original.userId.lastName}
         </td>
         :
         <td>
            {row.original.lastName}
         </td>
      ),
      size: 100,
      enableEditing: true
      },
      {
        accessorKey: "email",
        header: "Email",
      Cell: ({ row }) => (
        row.original.userId ?
         <td>
            {row.original.userId.email}
         </td>
         :
         <td>
            {row.original.email}
         </td>
      ),
      size: 100
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

  const handleCreateItem = async ({ values, table }) => {
    // //console.log(values)
    // dispatch(addItemToStore(item, price, info, file));
    // table.setCreatingRow(null); //exit creating mode
    // setLoading(true);
    
    // setTimeout(() => {
    //   setLoading(false)
    // }, 5000);
 
    // setItem("");
    // setPrice("");
    // setInfo("");
    // setFile(null);
    
  };


  const handleSaveUser = async ({ row, values, table }) => {
    // const newItem = item ==="" ? values.item : item;
    // const newPrice = price ==="" ? values.price : price;
    // const newInfo = info ==="" ? values.info : info;
    //  dispatch(updateItemStore(row.original._id, newItem , newPrice, newInfo, file ));
    //  table.setEditingRow(null); //exit editing mode
  };

  const openDeleteConfirmModal = (row) => {
    // if (window.confirm("Are you sure you want to delete this item?")) {
    //   dispatch(deleteItemFromStore(row.original._id));
    // }
  };

  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: bookings,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    onCreatingRowSave: handleCreateItem,
    getRowId: (row) => row.id,
    //enableStickyHeader:true,
    onEditingRowSave: handleSaveUser,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New Item</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: "20px" }}
        >
         {/* <TextField
            type="text"
            label="item name"
            onChange={(event) => {
              setItem(event.target.value);
            }}
            required
          />
          <TextField
            type="number"
            label="item price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="more info"
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
          
          <TextField
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }} 
          />*/}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row }) => (
      <>
        <DialogTitle variant="h3">Edit Item</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* <TextField
            type="text"
            label={row.original.item}
            onChange={(event) => {
              setItem(event.target.value);
            }}
          />
          <TextField
            type="number"
            label={row.original.price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="text"
            label={row.original.info ? row.original.info : "info"}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
          <img src={row.original.image} alt="image" style={{width:"100px", height:"100px"}}/>
          <TextField
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          /> */}
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
        style={{backgroundColor:"#d21034", padding:"10px", textTransform:"none", fontSize:"20px"}}
      >
        Add new booking
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
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  if (bookings.length === 0 || loading) {
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
  return <div><MaterialReactTable table={table} /></div>;
};

export default BookingsDash;

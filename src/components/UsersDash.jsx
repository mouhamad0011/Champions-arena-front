import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/champions-arena-logo.png";
import Popup from "./Popup";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_EditActionButtons
} from "material-react-table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  register,
} from "../redux/actions/user";
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
  TextField
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
const UsersDash = () => {
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        header: "Id",
        size: 0,
        enableEditing: false,
      },
      {
        accessorKey: "firstName",
        header: "First name",
        size: 150,
        enableEditing: true,
      },
      {
        accessorKey: "lastName",
        header: "Last name",
        size: 150,
        enableEditing: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
        enableEditing: true,
        enableClickToCopy: true,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
        enableEditing: true,
      },
    ],
    []
  );

  const handleSaveUser = async ({ values, table }) => {
    dispatch(
      updateUser(
        values._id,
        token,
        values.firstName,
        values.lastName,
        values.email,
        values.role
      )
    );
    table.setEditingRow(null); //exit editing mode
  };

  const handleDelete = async (id) => {
    dispatch(deleteUser(id, token));
    setOpenDeleteConfirmModal(null);
  };

  const openSendEmail = (row) => {
    window.location = `mailto:${row.original.email}`;
  };
  const handleCreateUser = async ({ values, table }) => {
    dispatch(register(firstName, lastName, email, password))
    table.setCreatingRow(null);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  };
  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: users.length !== 0 ? users : [],
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    //getRowId: (row) => row.id,
    onEditingRowSave: handleSaveUser,
    onCreatingRowSave: handleCreateUser,
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
        <Tooltip title="SendEmail">
          <IconButton color="error">
              <SendIcon onClick={() => openSendEmail(row)}/>
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Add new user</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: "20px" }}
        >
         <TextField
            type="text"
            label="first name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            required
          />
          <TextField
            type="text"
            label="last name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            required
          />
          <TextField
            type="email"
            label="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <TextField
            type="password"
            label="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
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
        style={{backgroundColor:"#d21034", padding:"10px", textTransform:"none", fontSize:"20px"}}
      >
        Add user
      </Button>
    ),
  });
  if (openDeleteConfirmModal !== null) {
    return(
    <div>
      <MaterialReactTable table={table} />
      <Popup
        title="Are you sure you want to delete this user?"
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
  if (users.length === 0 || loading) {
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
  return <MaterialReactTable table={table} />;
};

export default UsersDash;

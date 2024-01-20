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
  getAllTerrains,
  updateTerrain,
  deleteTerrain,
  addTerrain,
} from "../redux/actions/terrain";
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

const StadiumsDash = () => {
  const terrains = useSelector((state) => state.terrains);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [file, setFile] = useState(null);
  const [sport, setSport] = useState("");
  const [dimensions, setDimensions] = useState("");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllTerrains());
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
        accessorKey: "name",
        header: "Stad name",
        size: 150,
        enableEditing: true,
      },
      {
        accessorKey: "sport",
        header: "Sport",
        size: 150,
        enableEditing: true,
      },
      {
        accessorKey: "hourPrice",
        header: "Hour Price",
        size: 100,
        enableEditing: true,
      },
      {
        accessorKey: "available",
        header: "Availablity",
        Cell: ({ row }) => (
            <td>
                {row.original.available ? "available" : "under maintenance"}
                </td>
          ),
        size: 150,
        enableEditing: true,
      },
      {
        accessorKey: "dimensions",
        header: "Dimensions",
        size: 100,
        enableEditing: true,
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

  const handleCreateItem = async ({ values, table }) => {
    dispatch(addTerrain(name, sport, available, price, file, dimensions));
    table.setCreatingRow(null); //exit creating mode
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false)
    }, 5000);
 
    setName("");
    setPrice("");
    setAvailable("");
    setFile(null);
    setSport("");
    setDimensions("")
  };


  const handleSaveUser = async ({ row, values, table }) => {
    const newName = name ==="" ? values.name : name;
    const newPrice = price ==="" ? values.price : price;
    const newAvailable = available ==="" ? values.available : available;
    const newSport = sport ==="" ? values.sport : sport;
    const newDim = dimensions ==="" ? values.dimensions : dimensions;
    dispatch(updateTerrain(row.original._id, newName, newSport, newAvailable, newPrice, file, newDim));
    table.setEditingRow(null); //exit editing mode
  };

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this stad?")) {
      dispatch(deleteTerrain(row.original._id));
    }
  };

  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: terrains,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    onCreatingRowSave: handleCreateItem,
    getRowId: (row) => row.id,
    //enableStickyHeader:true,
    onEditingRowSave: handleSaveUser,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Add New Terrain</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: "20px" }}
        >
         <TextField
            type="text"
            label="terrain name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <TextField
            type="number"
            label="hour price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="available"
            onChange={(event) => {
              setAvailable(event.target.value);
            }}
          />
           <TextField
            type="text"
            label="sport"
            onChange={(event) => {
              setSport(event.target.value);
            }}
          />
           <TextField
            type="text"
            label="dimensions"
            onChange={(event) => {
              setDimensions(event.target.value);
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
        <DialogTitle variant="h3">Edit Stadium</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
         <TextField
            type="text"
            label={row.original.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <TextField
            type="number"
            label={row.original.hourPrice}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            type="text"
            label={row.original.available ? "available" : "under maintenance"}
            onChange={(event) => {
              setAvailable(event.target.value);
            }}
          />
           <TextField
            type="text"
            label={row.original.sport}
            onChange={(event) => {
              setSport(event.target.value);
            }}
          />
           <TextField
            type="text"
            label={row.original.dimensions}
            onChange={(event) => {
              setDimensions(event.target.value);
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
        style={{backgroundColor:"#d21034", padding:"10px", textTransform:"none", fontSize:"20px"}}
      >
        Add new stadium
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
  if (terrains.length === 0 || loading) {
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

export default StadiumsDash;

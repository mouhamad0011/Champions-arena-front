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
  getAllCafeteriaItems,
  updateItemCafeteria,
  deleteItemFromCafeteria,
  addItemToCafeteria,
} from "../redux/actions/cafeteria";
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

const CafeteriaDash = () => {
  const cafeteria = useSelector((state) => state.cafeteria);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllCafeteriaItems());
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
        accessorKey: "item",
        header: "Item name",
        size: 150,
        enableEditing: true,
      },

      {
        accessorKey: "price",
        header: "Price",
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
    //console.log(values)
    dispatch(addItemToCafeteria(item, file, price));
    table.setCreatingRow(null); //exit creating mode
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false)
    }, 5000);
 
    setItem("");
    setPrice("");
    setFile(null);
    
  };


  const handleSaveUser = async ({row, values, table }) => {
    const newItem = item ==="" ? values.item : item;
    const newPrice = price ==="" ? values.price : price;

     dispatch(updateItemCafeteria(row.original._id, newItem , newPrice, file ));
     table.setEditingRow(null); //exit editing mode
  };

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteItemFromCafeteria(row.original._id));
    }
  };

  const table = useMaterialReactTable({
    initialState: { columnVisibility: { _id: false } },
    columns,
    data: cafeteria,
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
         <TextField
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
        <DialogTitle variant="h3">Edit Item</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <TextField
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
          <img src={row.original.image} alt="image" style={{width:"100px", height:"100px"}}/>
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
        Add new item
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
  if (cafeteria.length === 0 || loading) {
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

export default CafeteriaDash;

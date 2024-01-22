// import { useMemo, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../images/champions-arena-logo.png";
// import "./home.css";
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   MRT_EditActionButtons,
// } from "material-react-table";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getUserID } from "../UserInfo/GetUserInfo";
// import {
//   addBookingByUser,
//   getBookingsByDateAndTerrain,
// } from "../redux/actions/booking";
// import { getAllTerrains } from "../redux/actions/terrain";
// import Example2 from "../loading/Example2";
// import {
//   Modal,
//   Box,
//   Button,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Tooltip,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";


// const UserNew = () => {
//   const navigate = useNavigate();
//   const userId = getUserID();
//   const [loading, setLoading] = useState(false);
//   const [stadium, setStadium] = useState("Grand terrain");
//   const [terrainId, setTerrainId] = useState("65a26f3e1c912c4b41ccc4a7");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [duration, setDuration] = useState("");
//   const [hourPrice, setHourPrice] = useState("");

//   const [stads, setStads] = useState([]);
//   const terrains = useSelector((state) => state.terrains);
//   var bookings = useSelector((state) => state.bookings);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllTerrains());
//   }, []);

//   useEffect(() => {
//     if (terrains && stads.length === 0) {
//       setStads(
//         terrains.map((terrain) => ({
//           _id: terrain._id,
//           name: terrain.name,
//           hourPrice: terrain.hourPrice,
//         }))
//       );
//     }
//   }, [terrains, stads]);

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "_id",
//         header: "Id",
//         size: 0,
//         enableEditing: false,
//       },
//       {
//         accessorKey: "terrainId.name",
//         header: "Stad Name",
//         size: 150,
//         enableEditing: true,
//         editVariant: "select",
//       },
//       {
//         accessorKey: "date",
//         header: "Date",
//         size: 100,
//         enableEditing: true,
//       },
//       {
//         accessorKey: "time",
//         header: "Time",
//         size: 100,
//         enableEditing: true,
//       },
//       {
//         accessorKey: "duration",
//         header: "Duration",
//         size: 100,
//         enableEditing: true,
//       },
//       {
//         accessorKey: "bill",
//         header: "Bill",
//         size: 50,
//         enableEditing: true,
//       },
//     ],
//     []
//   );

//   const currentDate = new Date().toISOString().split("T")[0];

//   const oneHourSlots = [
//     "6h - 7h",
//     "7h - 8h",
//     "8h - 9h",
//     "9h - 10h",
//     "10h - 11h",
//     "11h - 12h",
//     "12h - 13h",
//     "13h - 14h",
//     "14h - 15h",
//     "15h - 16h",
//     "16h - 17h",
//     "17h - 18h",
//     "18h - 19h",
//     "19h - 20h",
//     "20h - 21h",
//     "21h - 22h",
//     "22h - 23h",
//     "23h - 24h",
//   ];

//   useEffect(() => {
//     const newDate = date.split("-");
//     const datee = newDate[2] + "-" + newDate[1] + "-" + newDate[0];
//     dispatch(getBookingsByDateAndTerrain(datee, terrainId));
//   }, [date, terrainId]);

//   const timesToRemove = bookings.map((booking) => booking.time && booking.time);
//   var timesSeparated = [];
//   if (timesToRemove.length > 0) {
//     timesToRemove.forEach((time) => {
//       const tab = time.split(" - ");
//       var nb1;
//       var nb2;
//       if (tab[0].length === 2) {
//         nb1 = tab[0].substring(0, 1);
//       } else {
//         nb1 = tab[0].substring(0, 2);
//       }
//       if (tab[1].length === 2) {
//         nb2 = tab[1].substring(0, 1);
//       } else {
//         nb2 = tab[1].substring(0, 2);
//       }
//       if (nb2 - nb1 === 1) {
//         timesSeparated.push(time);
//       } else {
//         nb1 = parseInt(nb1, 10);
//         nb2 = parseInt(nb2, 10);
//         timesSeparated.push(`${nb1}h - ${nb1 + 1}h`);
//         timesSeparated.push(`${nb1 + 1}h - ${nb2}h`);
//       }
//     });
//     //console.log(timesToRemove);
//     //   console.log(timesToRemove[1].split(" - "))
//     //  console.log(timesToRemove[1].split(" - ")[1].substring(0, 2) - timesToRemove[1].split(" - ")[0].substring(0, 2))
//     //console.log(timesToRemove[0].split(" - ")[1].length)
//   }
//   const filteredSlots = oneHourSlots.filter(
//     (slot) => !timesSeparated.includes(slot)
//   );

//   const getTwoHourIntervals = () => {
//     var intervals = [];
//     for (let i = 0; i < oneHourSlots.length - 1; i += 2) {
//       intervals.push(
//         `${oneHourSlots[i].split(" ")[0]} - ${
//           oneHourSlots[i + 1].split(" ")[2]
//         }`
//       );
//     }
//     return intervals;
//   };

//   const twoHourIntervals = getTwoHourIntervals();
//   const bookedTimes = bookings.map((item) => item.time);

//   const doIntervalsOverlap = (interval1, interval2) => {
//     const [start1, end1] = interval1.split(" - ");
//     const [start2, end2] = interval2.split(" - ");
//     return end1 > start2 && start1 < end2;
//   };

//   const availableIntervals = twoHourIntervals.filter((interval) => {
//     for (const bookedTime of bookedTimes) {
//       if (doIntervalsOverlap(interval, bookedTime)) {
//         return false;
//       }
//     }
//     return true;
//   });



//   const openDeleteConfirmModal = (row) => {
//     // if (window.confirm("Are you sure you want to delete this user?")) {
//     //   dispatch(deleteUser(row.original._id));
//     // }
//   };

//   const handleCreateUser = async ({ values, table }) => {
//     const bill = duration*hourPrice;
//     const datee = date.split("-");
//     const newDate = datee[2]+"-"+datee[1]+"-"+datee[0];
//     dispatch(addBookingByUser(userId, terrainId, newDate, time, duration, bill))
//     table.setCreatingRow(null);  
//     window.location.reload()

//   };
//   const table = useMaterialReactTable({
//     columns,
//     data: [],
//     createDisplayMode: "modal",
//     editDisplayMode: "modal", 
//     enableEditing: true,
//     onCreatingRowSave: handleCreateUser,
//     renderCreateRowDialogContent: ({ table, row }) => (
//       <>
//         <DialogTitle variant="h3">Add New Booking</DialogTitle>
//         <DialogContent
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1rem",
//             marginTop: "20px",
//           }}
//         >
//           <Select
//             defaultValue="65a26f3e1c912c4b41ccc4a7"
//             onChange={(event) => {
//               setTerrainId(event.target.value);
//             }}
//             required
//           >
//             {stads &&
//               stads.map((stad, index) => (
//                 <MenuItem
//                   value={stad._id}
//                   key={index}
//                   onClick={() => setHourPrice(stad.hourPrice)}
//                 >
//                   {stad.name}
//                 </MenuItem>
//               ))}
//           </Select>
//           <TextField
//             type="date"
//             onChange={(event) => {
//               setDate(event.target.value);
//             }}
//             InputProps={{ inputProps: { min: currentDate } }}
//           />
//           <FormControl>
//             <FormLabel>Duration</FormLabel>
//             <RadioGroup
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//             >
//               <FormControlLabel
//                 value="1"
//                 control={<Radio />}
//                 label="One hour"
//               />
//               <FormControlLabel
//                 value="2"
//                 control={<Radio />}
//                 label="Two hours"
//               />
//             </RadioGroup>
//           </FormControl>
//           <Select
//             defaultValue={"6h - 7h" || "6h - 8h"}
//             onChange={(event) => {
//               setTime(event.target.value);
//             }}
//             required
//           >
//             <MenuItem disabled>Choose a time</MenuItem>
//             {duration && duration == 1 && filteredSlots
//               ? filteredSlots.map((slot, index) => (
//                   <MenuItem value={slot} key={index}>
//                     {slot}
//                   </MenuItem>
//                 ))
//               : availableIntervals.map((slot, index) => (
//                   <MenuItem value={slot} key={index}>
//                     {slot}
//                   </MenuItem>
//                 ))}
//           </Select>

//           <TextField type="text" value={`Total: ${duration * hourPrice}$`} />
//         </DialogContent>
//         <DialogActions>
//           <MRT_EditActionButtons variant="text" table={table} row={row} />
//         </DialogActions>
//       </>
//     ),
//     renderTopToolbarCustomActions: ({ table }) => (
//       <Button
//         variant="contained"
//         onClick={() => {
//           table.setCreatingRow(true); 
//         }}
//         style={{
//           backgroundColor: "#d21034",
//           padding: "10px",
//           textTransform: "none",
//           fontSize: "20px",
//         }}
//       >
//         Add new booking
//       </Button>
//     ),
//   });
//   if (loading) {
//     return (
//       <>
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Example2 />
//         </div>
//       </>
//     );
//   }
//   return (
//       <MaterialReactTable table={table} />
//   );
// };

// export default UserNew;

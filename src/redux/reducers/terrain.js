const terrainReducer = (state = [], action) => {
  switch (action.type) {
    case "getAllTerrains":
      return action.payload;
    case "getTerrainsBySport":
      return action.payload;
    case "addTerrain":
      return [...state, action.payload];
    case "deleteTerrain":
      return state.filter((terrain) => terrain._id !== action.payload);
    case "updateTerrain":
      return state.map((terrain) =>
        terrain._id === action.payload.Id ? action.payload.terrain : terrain
      );
    default:
      return state;
  }
};
export default terrainReducer;

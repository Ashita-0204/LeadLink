import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./screens/TicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;

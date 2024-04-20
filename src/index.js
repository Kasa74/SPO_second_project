import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TicketStore from "./store/ticketstore";
import "./styles/reset.css";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      ticket: new TicketStore(),
    }}
  >
    <App />
  </Context.Provider>
);

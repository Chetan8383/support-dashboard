import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails";
import AllTickets from "./pages/AllTickets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tickets" element={<AllTickets />} />
      <Route
        path="/tickets/:ticketId"
        element={<TicketDetails />}
      />
    </Routes>
  );
}

export default App;
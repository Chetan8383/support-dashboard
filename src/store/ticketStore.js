import { create } from "zustand";
import { getTickets } from "../services/ticketApi";

const useTicketStore = create((set) => ({
  tickets: [],
  loading: false,
  error: null,

  search: "",
  statusFilter: "All",
  priorityFilter: "All",

  fetchTickets: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const data = await getTickets();

      set({
        tickets: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: "Failed to load tickets.",
        loading: false,
      });
    }
  },

  setSearch: (search) => {
    set({ search });
  },

  setStatusFilter: (statusFilter) => {
    set({ statusFilter });
  },

  setPriorityFilter: (priorityFilter) => {
    set({ priorityFilter });
  },

  // imp feauture**
  updateTicketStatus: (ticketId, newStatus) => {
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket,
      ),
    }));
  },
}));

export default useTicketStore;

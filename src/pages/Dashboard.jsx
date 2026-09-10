import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Ticket,
  CircleDot,
  Clock3,
  CheckCircle2,
  TicketIcon,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import StatCard from "../components/dashboard/StatCard";
import useTicketStore from "../store/ticketStore";
import TicketFilters from "../components/dashboard/TicketFilters";
import TicketTable from "../components/dashboard/TicketTable";


const Dashboard = () => {
  const navigate = useNavigate();

  const {
    tickets,
    loading,
    error,
    fetchTickets,
    search,
    statusFilter,
    priorityFilter,
    updateTicketStatus
  } = useTicketStore();

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  const filteredTickets = tickets.filter((ticket) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTerm) ||
      ticket.customer.name.toLowerCase().includes(searchTerm) ||
      ticket.subject.toLowerCase().includes(searchTerm);

    const matchesStatus =
      statusFilter === "All" ||
      ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      ticket.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Good morning 👋
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Here's what's happening with your support tickets.
                </p>
              </div>

              {/* Temporary API State */}
              <div className="mt-8">
                {loading && (
                  <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />

                    <p className="mt-4 text-sm font-medium text-slate-700">
                      Loading tickets...
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Please wait while we fetch the latest support tickets.
                    </p>
                  </div>
                )}

                {!loading && !error && (
                  <>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      <StatCard
                        title="Total Tickets"
                        value={totalTickets}
                        icon={Ticket}
                        description="All support tickets"
                      />

                      <StatCard
                        title="Open"
                        value={openTickets}
                        icon={CircleDot}
                        description="Tickets awaiting action"
                      />

                      <StatCard
                        title="In Progress"
                        value={inProgressTickets}
                        icon={Clock3}
                        description="Tickets being handled"
                      />

                      <StatCard
                        title="Resolved"
                        value={resolvedTickets}
                        icon={CheckCircle2}
                        description="Successfully resolved"
                      />
                    </div>

                    <div className="mt-8">
                      <TicketFilters />
                    </div>

                    <div className="mt-6">
                      <TicketTable
                        tickets={filteredTickets}
                        onTicketClick={(ticket) => {
                          navigate(`/tickets/${ticket.id}`);
                        }}
                        onStatusChange={updateTicketStatus}
                      />
                    </div>
                  </>
                )}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-8 text-center">
                    <p className="text-sm font-semibold text-red-700">
                      Unable to load tickets
                    </p>

                    <p className="mt-1 text-sm text-red-600">
                      {error}
                    </p>

                    <button
                      onClick={fetchTickets}
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {!loading && !error && (
                  <p className="text-sm text-slate-500">
                    {tickets.length} tickets loaded.
                  </p>
                )}
              </div>

            </div>
          </main>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
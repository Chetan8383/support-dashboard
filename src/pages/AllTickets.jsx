import { ArrowLeft } from "lucide-react";
import useTicketStore from "../store/ticketStore";
import TicketTable from "../components/dashboard/TicketTable";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllTickets = () => {
    const navigate = useNavigate();

    const {
        tickets,
        loading,
        error,
        fetchTickets,
        updateTicketStatus,
    } = useTicketStore();

    useEffect(() => {
        if (tickets.length === 0) {
            fetchTickets();
        }
    }, [tickets.length, fetchTickets]);



    return (
        <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                >
                    <ArrowLeft size={16} />
                    Back
                </button>

                
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        All Tickets
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        View and manage all customer support tickets.
                    </p>
                </div>

                <div className="mt-6">
                    {loading && (
                        <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
                            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />

                            <p className="mt-4 text-sm font-medium text-slate-700">
                                Loading tickets...
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-8 text-center">
                            <p className="text-sm font-semibold text-red-700">
                                Unable to load tickets
                            </p>

                            <p className="mt-1 text-sm text-red-600">
                                {error}
                            </p>
                        </div>
                    )}

                    {!loading && !error && (
                        <TicketTable
                            tickets={tickets}
                            onTicketClick={(ticket) => {
                                navigate(`/tickets/${ticket.id}`);
                            }}
                            onStatusChange={updateTicketStatus}
                        />
                    )}
                </div>

            </div>
        </main>
    );
};

export default AllTickets;
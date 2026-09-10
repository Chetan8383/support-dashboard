import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import useTicketStore from "../store/ticketStore";
import Conversation from "../components/tickets/Conversation";
import StatusSelect from "../components/tickets/StatusSelect";

// helpers
const priorityStyles = {
    High: "bg-red-50 text-red-600 border-red-100",
    Medium: "bg-amber-50 text-amber-600 border-amber-100",
    Low: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

const statusStyles = {
    Open: "bg-blue-50 text-blue-600 border-blue-100",
    "In Progress": "bg-amber-50 text-amber-600 border-amber-100",
    Resolved: "bg-emerald-50 text-emerald-600 border-emerald-100",
};


const TicketDetails = () => {
    const { ticketId } = useParams();

    const {
        tickets,
        loading,
        fetchTickets,
        updateTicketStatus,
    } = useTicketStore();

    useEffect(() => {
        if (tickets.length === 0) {
            fetchTickets();
        }
    }, [tickets.length, fetchTickets]);


    const ticket = tickets.find(
        (ticket) => ticket.id === ticketId
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 p-6">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
                        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />

                        <p className="mt-4 text-sm font-medium text-slate-700">
                            Loading ticket...
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Please wait while we load the ticket details.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (!ticket) {
        return (
            <div className="min-h-screen bg-slate-50 p-6">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
                        <p className="text-sm font-semibold text-slate-700">
                            Ticket not found
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            The ticket you're looking for doesn't exist.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
            <div className="mx-auto max-w-5xl">

                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </Link>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">

                    {/* Main Content */}
                    <div className="lg:col-span-2">

                        <div className="rounded-2xl border border-slate-200 bg-white p-6">

                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                Ticket ID
                            </p>

                            <h1 className="mt-2 text-2xl font-bold text-slate-900">
                                {ticket.id}
                            </h1>

                            <p className="mt-4 text-lg font-medium text-slate-700">
                                {ticket.subject}
                            </p>

                            {/* description card */}
                            <div className="mt-6">
                                <h2 className="text-sm font-semibold text-slate-900">
                                    Description
                                </h2>

                                <p className="mt-3 leading-relaxed text-slate-600">
                                    {ticket.description}
                                </p>
                            </div>

                            {/* conversation card */}
                            <div className="mt-6">
                                <Conversation messages={ticket.messages} />
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6">

                            <h2 className="text-sm font-semibold text-slate-900">
                                Customer Information
                            </h2>

                            <div className="mt-5 space-y-4">

                                <div>
                                    <p className="text-xs text-slate-400">
                                        Name
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800">
                                        {ticket.customer.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800">
                                        {ticket.customer.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">
                                        Priority
                                    </p>

                                    <span
                                        className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${priorityStyles[ticket.priority]}`}
                                    >
                                        {ticket.priority}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-slate-500">Status</p>

                                    <StatusSelect
                                        status={ticket.status}
                                        onChange={(newStatus) =>
                                            updateTicketStatus(ticket.id, newStatus)
                                        }
                                    />
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">
                                        Created
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800">
                                        {new Date(ticket.createdAt).toLocaleString()}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TicketDetails;
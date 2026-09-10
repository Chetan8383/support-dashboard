import { ChevronRight } from "lucide-react";
import StatusSelect from "../tickets/StatusSelect";

const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-amber-50 text-amber-600",
  Low: "bg-emerald-50 text-emerald-600",
};

const statusStyles = {
  Open: "bg-blue-50 text-blue-600",
  "In Progress": "bg-amber-50 text-amber-600",
  Resolved: "bg-emerald-50 text-emerald-600",
};

const TicketRow = ({ ticket, onTicketClick, onStatusChange }) => {
  const formattedDate = new Date(ticket.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <tr
      onClick={() => onTicketClick(ticket)}
      className="cursor-pointer border-t border-slate-100 transition hover:bg-slate-50"
    >
      {/* Customer */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
            {ticket.customer.name
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              {ticket.customer.name}
            </p>

            <p className="text-xs text-slate-400">
              {ticket.id}
            </p>
          </div>
        </div>
      </td>

      {/* Issue */}
      <td className="max-w-xs px-6 py-4">
        <p className="truncate text-sm font-medium text-slate-700">
          {ticket.subject}
        </p>
      </td>

      {/* Priority */}
      <td className="px-6 py-4">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[ticket.priority]}`}
        >
          {ticket.priority}
        </span>
      </td>

      {/* Status */}
      <td
        className="px-6 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <StatusSelect
          status={ticket.status}
          onChange={(newStatus) =>
            onStatusChange(ticket.id, newStatus)
          }
        />
      </td>

      {/* Date */}
      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
        {formattedDate}
      </td>

      {/* Action */}
      <td className="px-4 py-4">
        <ChevronRight
          size={18}
          className="text-slate-400"
        />
      </td>
    </tr>
  );
};

export default TicketRow;
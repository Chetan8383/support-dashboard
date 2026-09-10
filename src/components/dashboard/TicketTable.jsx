import TicketRow from "./TicketRow";

const TicketTable = ({ tickets, onTicketClick, onStatusChange }) => {

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Support Tickets
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              View and manage customer support requests
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            {tickets.length} tickets
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Customer
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Issue
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Priority
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Created
              </th>

              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>

          <tbody>
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <TicketRow
                  key={ticket.id}
                  ticket={ticket}
                  onTicketClick={onTicketClick}
                  onStatusChange={onStatusChange}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center">
                  <p className="text-sm font-medium text-slate-700">
                    No tickets found
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try adjusting your search or filters.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
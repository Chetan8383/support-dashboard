const StatusSelect = ({ status, onChange }) => {
    const statusStyles = {
        Open: "bg-blue-50 text-blue-600",
        "In Progress": "bg-amber-50 text-amber-600",
        Resolved: "bg-emerald-50 text-emerald-600",
    };

    return (
        <select
            value={status}
            onChange={(e) => onChange(e.target.value)}
            className={`rounded-full border-0 px-3 py-1.5 text-xs font-medium outline-none focus:ring-2 focus:ring-indigo-200 ${statusStyles[status]}`}
        >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
        </select>
    );
};

export default StatusSelect;
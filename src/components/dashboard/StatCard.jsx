const StatCard = ({ title, value, icon: Icon, description }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Icon size={20} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
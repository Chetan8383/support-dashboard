import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
      
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-xs text-slate-400">
          Manage your customer support tickets
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
          CM
        </div>

      </div>
    </header>
  );
};

export default Header;
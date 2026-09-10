import { useState } from "react";
import { LayoutDashboard, Ticket, Settings, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === "/";

  return (
    <>
      {/* mobile nav starts*/}
      <div className=" flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 lg:hidden">
        <div>
          <p className="text-base font-bold text-slate-900">
            SupportDesk
          </p>

          <p className="text-xs text-slate-400">
            Customer Support
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Open navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="space-y-1">
            <button
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm font-medium text-indigo-600"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button
              onClick={() => {
                navigate("/tickets");
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <Ticket size={18} />
              Tickets
            </button>


            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
              <Settings size={18} />
              Settings
            </button>
          </nav>
        </div>
      )}

      {/* ends */}

      {/* desktop nav */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-full min-h-screen flex-col">

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Menu
            </p>

            <div className="space-y-1">

              <button
                onClick={() => navigate("/")}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${isDashboard
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button
                onClick={() => navigate("/tickets")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <Ticket size={18} />
                Tickets
              </button>

              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                <Settings size={18} />
                Settings
              </button>
            </div>
          </nav>

          {/* User */}
          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
                CM
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Chetan Mehra
                </p>

                <p className="text-xs text-slate-400">
                  Support Admin
                </p>
              </div>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
import { User, Headphones } from "lucide-react";

const Conversation = ({ messages }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">
          Conversation
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Previous messages between the customer and support team
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {messages.map((message) => {
          const isCustomer = message.sender === "customer";

          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isCustomer ? "justify-start" : "justify-end"
                }`}
            >
              {/* Customer avatar */}
              {isCustomer && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <User size={16} />
                </div>
              )}

              <div
                className={`max-w-[80%] ${isCustomer ? "items-start" : "items-end"
                  } flex flex-col`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${isCustomer
                      ? "rounded-tl-md bg-slate-100 text-slate-700"
                      : "rounded-tr-md bg-indigo-600 text-white"
                    }`}
                >
                  {message.message}
                </div>

                <p className="mt-1.5 text-[11px] text-slate-400">
                  {new Date(message.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {/* Support avatar */}
              {!isCustomer && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Headphones size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Conversation;
import React from "react";

interface EventStatusDashboardProps {
  status: string;
}

export default function EventStatusDashboard({ status }: EventStatusDashboardProps) {
  const backgroundColorClass =
    status === "completed" ? "bg-[#065F46] text-green-800" : status === "on progress" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100";

  return (
    <div className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold leading-5 ${backgroundColorClass}`}>
      {status}
    </div>
  );
}

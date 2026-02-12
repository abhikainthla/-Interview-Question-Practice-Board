const statusStyles = {
  unread: "bg-gray-100 text-gray-600",
  practiced: "bg-blue-100 text-blue-600",
  confident: "bg-green-100 text-green-600",
};

const StatusBadge = ({ status }) => {
  const normalizedStatus = status?.toLowerCase();

  return (
    <span
      className={`text-xs px-2 py-1 rounded ${
        statusStyles[normalizedStatus] || "bg-gray-50 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;

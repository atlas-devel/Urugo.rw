// src/components/admin/dashboard/RecentActivity.tsx
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}

interface RecentActivityProps {
  data: Activity[];
}

export function RecentActivity({ data }: RecentActivityProps) {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${Math.floor(diffHours / 24)} days ago`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle size={16} className="text-[#4880ff]" />;
      case "pending":
        return <Clock size={16} className="text-yellow-500" />;
      case "failed":
        return <AlertCircle size={16} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-800/20 dark:backdrop-blur-3xl dark:border-gray-800/30">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Latest platform actions
        </p>
      </div>

      <div className="space-y-4">
        {data.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                {getStatusIcon(activity.status)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.target}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatTime(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

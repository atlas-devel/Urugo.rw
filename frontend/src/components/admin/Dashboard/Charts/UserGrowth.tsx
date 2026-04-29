// src/components/admin/dashboard/charts/UserGrowthChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface UserGrowthData {
  date: string;
  newUsers: number;
  activeUsers: number;
}

interface UserGrowthChartProps {
  data: UserGrowthData[];
}

export function UserGrowthChart({ data }: UserGrowthChartProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-800/20 dark:backdrop-blur-3xl dark:border-gray-800/30 shadow-secondary-color/20 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            User Growth
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            New and active users over time
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span className="text-gray-600 dark:text-gray-400">New Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#4880ff]" />
            <span className="text-gray-600 dark:text-gray-400">
              Active Users
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {/* Purple Gradient for New Users Line */}
            <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>

            {/* Blue Gradient for Active Users Line */}
            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4880ff" />
              <stop offset="100%" stopColor="#93b1ff" />
            </linearGradient>

            {/* Glow Effect Filters for Dark Mode */}
            <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor="#8b5cf6" floodOpacity="0.4" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor="#4880ff" floodOpacity="0.4" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines - lighter for dark mode */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#333333"
            strokeOpacity={0.5}
          />

          <XAxis
            dataKey="date"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#888888" }}
          />

          <YAxis
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            tick={{ fill: "#888888" }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              color: "#ffffff",
            }}
            labelStyle={{ color: "#cccccc" }}
            itemStyle={{ color: "#ffffff" }}
          />

          <Line
            type="monotone"
            dataKey="newUsers"
            stroke="url(#blueGradient)"
            strokeWidth={2.5}
            dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4, stroke: "#000000" }}
            activeDot={{
              r: 6,
              fill: "#a78bfa",
              stroke: "#000000",
              strokeWidth: 2,
            }}
          />

          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="url(#greenGradient)"
            strokeWidth={2.5}
            dot={{ fill: "#4880ff", strokeWidth: 2, r: 4, stroke: "#000000" }}
            activeDot={{
              r: 6,
              fill: "#93b1ff",
              stroke: "#000000",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// src/components/admin/dashboard/charts/PropertyLocationChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MapPin } from "lucide-react";

interface PropertyLocationData {
  location: string;
  available: number;
  occupied: number;
  total: number;
}

interface PropertyLocationChartProps {
  data: PropertyLocationData[];
}

export function PropertyLocationChart({ data }: PropertyLocationChartProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-800/20 dark:backdrop-blur-3xl dark:border-gray-800/30">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Properties by Location
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Distribution across districts
          </p>
        </div>
        <MapPin size={20} className="text-gray-400 dark:text-gray-600" />
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
        >
          <defs>
            <linearGradient id="availableGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4880ff" />
              <stop offset="100%" stopColor="#93b1ff" />
            </linearGradient>
            <linearGradient id="occupiedGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>

          <XAxis
            type="number"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#888888" }}
          />

          <YAxis
            type="category"
            dataKey="location"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={80}
            tick={{ fill: "#888888" }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#cccccc" }}
            itemStyle={{ color: "#ffffff" }}
          />

          <Legend
            formatter={(value) => (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {value}
              </span>
            )}
          />

          <Bar
            dataKey="available"
            name="Available"
            fill="url(#availableGradient)"
            radius={[0, 4, 4, 0]}
          />
          <Bar
            dataKey="occupied"
            name="Occupied"
            fill="url(#occupiedGradient)"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

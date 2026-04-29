// src/components/admin/dashboard/charts/TopLandlordsChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Crown } from "lucide-react";

interface TopLandlordData {
  name: string;
  properties: number;
  tenants: number;
  revenue: number;
}

interface TopLandlordsChartProps {
  data: TopLandlordData[];
}

export function TopLandlordsChart({ data }: TopLandlordsChartProps) {
  const chartData = data.slice(0, 5).map((item) => ({
    name:
      item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name,
    properties: item.properties,
  }));

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-800/20 dark:backdrop-blur-3xl dark:border-gray-800/30">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Landlords
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By number of properties
          </p>
        </div>
        <Crown size={20} className="text-yellow-500" />
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="topLandlordGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#4880ff" />
              <stop offset="100%" stopColor="#93b1ff" />
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
            dataKey="name"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={100}
            tick={{ fill: "#888888" }}
          />

          <Tooltip
            formatter={(value: number) => [`${value} properties`, "Properties"]}
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#cccccc" }}
            itemStyle={{ color: "#ffffff" }}
          />

          <Bar
            dataKey="properties"
            name="Properties"
            fill="url(#topLandlordGradient)"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

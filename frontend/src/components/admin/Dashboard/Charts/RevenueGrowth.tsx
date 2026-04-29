// src/components/admin/dashboard/charts/RevenueChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface RevenueData {
  month: string;
  revenue: number;
  payments: number;
}

interface RevenueChartProps {
  data: RevenueData[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const maxRevenue = Math.max(...data.map((item) => item.revenue));

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-gray-800/20 dark:backdrop-blur-3xl dark:border-gray-800/30">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Trend
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Monthly revenue over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93b1ff" />
              <stop offset="100%" stopColor="#4880ff" />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#333333"
            strokeOpacity={0.5}
          />

          <XAxis
            dataKey="month"
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
            tickFormatter={(value) => `${value / 1000000}M`}
            tick={{ fill: "#888888" }}
          />

          <Tooltip
            formatter={(value: number) => [formatCurrency(value), "Revenue"]}
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#cccccc" }}
            itemStyle={{ color: "#ffffff" }}
          />

          <Bar dataKey="revenue" radius={[8, 8, 0, 0]} fill="url(#barGradient)">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.revenue === maxRevenue ? "url(#barGradient)" : "#4880ff"
                }
                opacity={entry.revenue === maxRevenue ? 1 : 0.6}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

type ChartData = {
  category: string;
  total: number;
};

type AnalyticsPieChartProps = {
  data: ChartData[];
};

const COLORS = [
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EF4444",
  "#3B82F6",
  "#EC4899",
];

export default function AnalyticsPieChart({ data }: AnalyticsPieChartProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#111827] sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          Category Distribution
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Percentage of courses by category
        </p>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full sm:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="total"
              nameKey="category"
              cx="50%"
              cy="50%"
              // রেসপন্সিভ সাইজ
              outerRadius={window.innerWidth < 640 ? 80 : 110}
              innerRadius={window.innerWidth < 640 ? 40 : 55}
              paddingAngle={4}
              label={window.innerWidth > 640} // মোবাইলে লেবেল হিডেন রাখা ভালো
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
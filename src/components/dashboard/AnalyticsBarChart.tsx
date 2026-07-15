"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type ChartData = {
  category: string;
  total: number;
};

type AnalyticsBarChartProps = {
  data: ChartData[];
};

export default function AnalyticsBarChart({
  data,
}: AnalyticsBarChartProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#111827] sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          Course Categories
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Number of courses in each category
        </p>
      </div>

      {/* মোবাইল এবং ডেস্কটপের জন্য হাইট অ্যাডজাস্ট করা হয়েছে */}
      <div className="h-[250px] w-full sm:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false} // মোবাইলে পরিষ্কার দেখার জন্য ভার্টিকাল গ্রিড বন্ধ রাখা হয়েছে
            />
            <XAxis
              dataKey="category"
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar
              dataKey="total"
              radius={[6, 6, 0, 0]}
              fill="#06B6D4"
              maxBarSize={50} // বার যেন খুব মোটা না হয়ে যায়
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
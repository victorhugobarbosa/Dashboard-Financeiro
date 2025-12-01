"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", income: 4000, expense: 2400 },
    { name: "Fev", income: 3000, expense: 1398 },
    { name: "Mar", income: 2000, expense: 9800 },
    { name: "Abr", income: 2780, expense: 3908 },
    { name: "Mai", income: 1890, expense: 4800 },
    { name: "Jun", income: 2390, expense: 3800 },
];

export default function CashFlowChart() {
    return (
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Fluxo de Caixa</h3>
                <select className="bg-white/5 border border-white/10 text-xs text-zinc-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-neonGreen/50">
                    <option>Últimos 6 meses</option>
                    <option>Este Ano</option>
                </select>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis
                            dataKey="name"
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `R$${value}`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#09090b",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                            itemStyle={{ fontSize: "12px" }}
                            labelStyle={{ color: "#a1a1aa", marginBottom: "8px" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="income"
                            name="Receitas"
                            stroke="#10b981"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                        />
                        <Area
                            type="monotone"
                            dataKey="expense"
                            name="Despesas"
                            stroke="#ef4444"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorExpense)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

"use client";

import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";
import clsx from "clsx";

interface KPICardProps {
    title: string;
    amount: string;
    change: string;
    trend: "up" | "down" | "neutral";
    icon?: React.ElementType;
}

export default function KPICard({ title, amount, change, trend, icon: Icon }: KPICardProps) {
    return (
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/80 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors">
                    {Icon ? <Icon size={20} /> : <DollarSign size={20} />}
                </div>
                <span
                    className={clsx(
                        "flex items-center text-xs font-medium px-2 py-1 rounded-full",
                        trend === "up"
                            ? "text-neonGreen bg-neonGreen/10"
                            : trend === "down"
                                ? "text-softRed bg-softRed/10"
                                : "text-zinc-400 bg-zinc-800"
                    )}
                >
                    {trend === "up" ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                    {change}
                </span>
            </div>

            <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-bold text-white font-mono tracking-tight">{amount}</p>
        </div>
    );
}

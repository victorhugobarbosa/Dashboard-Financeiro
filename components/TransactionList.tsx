"use client";

import { ShoppingCart, Car, Coffee, Smartphone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const transactions = [
    {
        id: 1,
        name: "Apple Store",
        category: "Eletrônicos",
        amount: "- R$ 4.500,00",
        date: "Hoje, 14:30",
        icon: Smartphone,
        type: "expense",
    },
    {
        id: 2,
        name: "Uber",
        category: "Transporte",
        amount: "- R$ 24,90",
        date: "Hoje, 09:15",
        icon: Car,
        type: "expense",
    },
    {
        id: 3,
        name: "Freelance Project",
        category: "Renda Extra",
        amount: "+ R$ 2.500,00",
        date: "Ontem, 18:00",
        icon: ArrowUpRight,
        type: "income",
    },
    {
        id: 4,
        name: "Starbucks",
        category: "Alimentação",
        amount: "- R$ 32,50",
        date: "Ontem, 08:45",
        icon: Coffee,
        type: "expense",
    },
    {
        id: 5,
        name: "Amazon",
        category: "Compras",
        amount: "- R$ 129,90",
        date: "28 Nov, 2023",
        icon: ShoppingCart,
        type: "expense",
    },
    {
        id: 6,
        name: "Netflix",
        category: "Assinatura",
        amount: "- R$ 55,90",
        date: "27 Nov, 2023",
        icon: Smartphone,
        type: "expense",
    },
];

export default function TransactionList() {
    return (
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6 shrink-0">
                <h3 className="text-lg font-semibold text-white">Últimas Transações</h3>
                <Link href="/transactions" className="text-xs text-neonGreen hover:text-emerald-400 transition-colors">
                    Ver todas
                </Link>
            </div>

            <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {transactions.map((transaction) => {
                    const Icon = transaction.icon;
                    return (
                        <div
                            key={transaction.id}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-full bg-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all">
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{transaction.name}</p>
                                    <p className="text-xs text-zinc-500">{transaction.category} • {transaction.date}</p>
                                </div>
                            </div>
                            <span
                                className={clsx(
                                    "text-sm font-medium font-mono",
                                    transaction.type === "income" ? "text-neonGreen" : "text-white"
                                )}
                            >
                                {transaction.amount}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

"use client";

import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import { ArrowDownLeft, ArrowUpRight, Search, Filter, Download } from "lucide-react";
import clsx from "clsx";

const allTransactions = [
    { id: 1, name: "Apple Store", category: "Eletrônicos", amount: "R$ 4.500,00", date: "01 Dez, 2025", type: "expense", status: "Concluído" },
    { id: 2, name: "Freelance Project", category: "Renda Extra", amount: "R$ 2.500,00", date: "30 Nov, 2025", type: "income", status: "Concluído" },
    { id: 3, name: "Uber", category: "Transporte", amount: "R$ 24,90", date: "30 Nov, 2025", type: "expense", status: "Concluído" },
    { id: 4, name: "Starbucks", category: "Alimentação", amount: "R$ 32,50", date: "29 Nov, 2025", type: "expense", status: "Concluído" },
    { id: 5, name: "Amazon AWS", category: "Infraestrutura", amount: "R$ 150,00", date: "28 Nov, 2025", type: "expense", status: "Pendente" },
    { id: 6, name: "Spotify", category: "Assinatura", amount: "R$ 21,90", date: "28 Nov, 2025", type: "expense", status: "Concluído" },
    { id: 7, name: "Salário Mensal", category: "Salário", amount: "R$ 12.000,00", date: "25 Nov, 2025", type: "income", status: "Concluído" },
    { id: 8, name: "Academia SmartFit", category: "Saúde", amount: "R$ 119,90", date: "25 Nov, 2025", type: "expense", status: "Concluído" },
];

export default function Transactions() {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <TopBar />

                <div className="p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Transações</h1>
                            <p className="text-zinc-400 text-sm">Gerencie e visualize todo o seu histórico financeiro.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                                <Download size={16} />
                                Exportar
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-neonGreen text-black font-semibold rounded-lg text-sm hover:bg-emerald-400 transition-colors">
                                <Filter size={16} />
                                Filtrar
                            </button>
                        </div>
                    </div>

                    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                        <div className="p-4 border-b border-white/5 flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Buscar na fatura..."
                                    className="w-full pl-10 pr-4 py-2 bg-zinc-950/50 border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-neonGreen/50 transition-all"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-white">Todos</button>
                                <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-400 transition-colors">Entradas</button>
                                <button className="px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-medium text-zinc-400 transition-colors">Saídas</button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 text-zinc-400 font-medium">
                                    <tr>
                                        <th className="px-6 py-3">Descrição</th>
                                        <th className="px-6 py-3">Categoria</th>
                                        <th className="px-6 py-3">Data</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3 text-right">Valor</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {allTransactions.map((tx) => (
                                        <tr key={tx.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={clsx(
                                                        "p-2 rounded-full",
                                                        tx.type === "income" ? "bg-neonGreen/10 text-neonGreen" : "bg-softRed/10 text-softRed"
                                                    )}>
                                                        {tx.type === "income" ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                                                    </div>
                                                    <span className="font-medium text-white">{tx.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-zinc-400">{tx.category}</td>
                                            <td className="px-6 py-4 text-zinc-400">{tx.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={clsx(
                                                    "px-2 py-1 rounded-full text-xs font-medium",
                                                    tx.status === "Concluído" ? "bg-emerald-500/10 text-emerald-500" : "bg-yellow-500/10 text-yellow-500"
                                                )}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                            <td className={clsx(
                                                "px-6 py-4 text-right font-mono font-medium",
                                                tx.type === "income" ? "text-neonGreen" : "text-white"
                                            )}>
                                                {tx.type === "expense" ? "-" : "+"} {tx.amount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                            <span>Mostrando 8 de 128 transações</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded hover:bg-white/5 disabled:opacity-50" disabled>Anterior</button>
                                <button className="px-3 py-1 rounded hover:bg-white/5 text-white">Próximo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

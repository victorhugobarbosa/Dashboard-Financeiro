"use client";

import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import { PieChart, TrendingUp, TrendingDown, DollarSign, Bitcoin } from "lucide-react";

const assets = [
    { name: "Bitcoin", symbol: "BTC", amount: "0.45 BTC", value: "R$ 152.000,00", change: "+5.2%", trend: "up", icon: Bitcoin },
    { name: "Apple Inc.", symbol: "AAPL", amount: "50 Ações", value: "R$ 48.500,00", change: "+1.8%", trend: "up", icon: DollarSign },
    { name: "Tesla", symbol: "TSLA", amount: "20 Ações", value: "R$ 22.100,00", change: "-2.4%", trend: "down", icon: DollarSign },
    { name: "Tesouro Direto", symbol: "RF", amount: "N/A", value: "R$ 35.000,00", change: "+0.9%", trend: "up", icon: Shield },
];

function Shield(props: React.SVGProps<SVGSVGElement>) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}

export default function Investments() {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <TopBar />

                <div className="p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Investimentos</h1>
                            <p className="text-zinc-400 text-sm">Acompanhe a performance da sua carteira.</p>
                        </div>
                    </div>

                    {/* Portfolio Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <PieChart size={100} />
                            </div>
                            <p className="text-zinc-400 text-sm mb-1">Patrimônio Total</p>
                            <h2 className="text-3xl font-bold text-white mb-4">R$ 257.600,00</h2>
                            <div className="flex items-center gap-2 text-neonGreen text-sm bg-neonGreen/10 w-fit px-2 py-1 rounded-lg">
                                <TrendingUp size={16} />
                                <span>+12.4% este ano</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                            <p className="text-zinc-400 text-sm mb-4">Alocação</p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Cripto</span>
                                    <span className="text-white">59%</span>
                                </div>
                                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[59%] rounded-full"></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span>Ações</span>
                                    <span className="text-white">27%</span>
                                </div>
                                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[27%] rounded-full"></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span>Renda Fixa</span>
                                    <span className="text-white">14%</span>
                                </div>
                                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-neonGreen w-[14%] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-center items-center text-center">
                            <div className="p-4 rounded-full bg-white/5 mb-3">
                                <TrendingUp size={24} className="text-neonGreen" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Melhor Performance</h3>
                            <p className="text-zinc-400 text-sm">Bitcoin (BTC)</p>
                            <p className="text-neonGreen font-bold mt-1">+5.2% hoje</p>
                        </div>
                    </div>

                    {/* Asset List */}
                    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                        <div className="p-6 border-b border-white/5">
                            <h3 className="text-lg font-semibold text-white">Seus Ativos</h3>
                        </div>
                        <div className="divide-y divide-white/5">
                            {assets.map((asset, index) => {
                                const Icon = asset.icon;
                                return (
                                    <div key={index} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-zinc-800 text-white">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">{asset.name}</p>
                                                <p className="text-xs text-zinc-400">{asset.symbol}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-medium text-white">{asset.value}</p>
                                            <div className="flex items-center justify-end gap-1 text-xs">
                                                {asset.trend === "up" ? (
                                                    <TrendingUp size={12} className="text-neonGreen" />
                                                ) : (
                                                    <TrendingDown size={12} className="text-softRed" />
                                                )}
                                                <span className={asset.trend === "up" ? "text-neonGreen" : "text-softRed"}>
                                                    {asset.change}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

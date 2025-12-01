"use client";

import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import CreditCard from "@/components/CreditCard";
import { Plus, Shield, Lock, Smartphone } from "lucide-react";

export default function Cards() {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <TopBar />

                <div className="p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Meus Cartões</h1>
                            <p className="text-zinc-400 text-sm">Gerencie seus cartões físicos e virtuais.</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-neonGreen text-black font-semibold rounded-lg text-sm hover:bg-emerald-400 transition-colors">
                            <Plus size={16} />
                            Novo Cartão
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Main Card */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Principal</h3>
                            <CreditCard />
                            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-400">Limite Utilizado</span>
                                    <span className="text-white font-medium">R$ 12.450 / R$ 20.000</span>
                                </div>
                                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-neonGreen w-[62%] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Virtual Card */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Virtual</h3>
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-white/10 overflow-hidden group h-[220px] flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-medium text-zinc-400 mb-1">Saldo Atual</p>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">R$ 850,00</h3>
                                    </div>
                                    <Smartphone className="text-white/20" size={32} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-xs text-zinc-500 mb-1">Titular</p>
                                            <p className="text-sm font-medium text-white tracking-wide">VICTOR BARBOSA</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-zinc-500 mb-1">Validade</p>
                                            <p className="text-sm font-medium text-white tracking-wide">12/29</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-400">Limite Utilizado</span>
                                    <span className="text-white font-medium">R$ 850 / R$ 5.000</span>
                                </div>
                                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[17%] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Ações Rápidas</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <button className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-white/5 transition-colors text-left group">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Bloquear Cartão</p>
                                        <p className="text-xs text-zinc-400">Suspender temporariamente</p>
                                    </div>
                                </button>

                                <button className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-white/5 transition-colors text-left group">
                                    <div className="p-3 rounded-full bg-neonGreen/10 text-neonGreen group-hover:bg-neonGreen group-hover:text-black transition-colors">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Seguro Cartão</p>
                                        <p className="text-xs text-zinc-400">Proteção contra roubo</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

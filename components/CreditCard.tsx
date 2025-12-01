"use client";

import { CreditCard as CardIcon, Wifi } from "lucide-react";

export default function CreditCard() {
    return (
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 overflow-hidden group h-[220px] flex flex-col justify-between">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonGreen/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neonGreen/10 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/10 transition-all duration-500"></div>

            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className="text-xs font-medium text-zinc-400 mb-1">Saldo Atual</p>
                    <h3 className="text-2xl font-bold text-white tracking-tight">R$ 12.450,00</h3>
                </div>
                <CardIcon className="text-white/20" size={32} />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-8 rounded bg-white/10 flex items-center justify-center border border-white/5">
                        <div className="w-6 h-4 bg-yellow-500/80 rounded-sm"></div>
                    </div>
                    <Wifi className="text-zinc-500 rotate-90" size={20} />
                </div>

                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs text-zinc-500 mb-1">Titular</p>
                        <p className="text-sm font-medium text-white tracking-wide">VICTOR BARBOSA</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-zinc-500 mb-1">Validade</p>
                        <p className="text-sm font-medium text-white tracking-wide">12/28</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

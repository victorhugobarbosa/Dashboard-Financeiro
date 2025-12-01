"use client";

import { Home, CreditCard, PieChart, Settings, ArrowRightLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
    { name: "Visão Geral", href: "/", icon: Home },
    { name: "Transações", href: "/transactions", icon: ArrowRightLeft },
    { name: "Meus Cartões", href: "/cards", icon: CreditCard },
    { name: "Investimentos", href: "/investments", icon: PieChart },
    { name: "Configurações", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen bg-zinc-950 border-r border-white/10 fixed left-0 top-0">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-white tracking-tight">
                    Finance<span className="text-neonGreen">.ai</span>
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon
                                size={20}
                                className={clsx(
                                    "transition-colors",
                                    isActive ? "text-neonGreen" : "group-hover:text-neonGreen"
                                )}
                            />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-white/10">
                <Link href="/settings" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neonGreen to-emerald-600 flex items-center justify-center text-black font-bold group-hover:scale-105 transition-transform">
                        VB
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate group-hover:text-neonGreen transition-colors">Victor Barbosa</p>
                        <p className="text-xs text-zinc-400 truncate">Pro Plan</p>
                    </div>
                </Link>
            </div>
        </aside>
    );
}

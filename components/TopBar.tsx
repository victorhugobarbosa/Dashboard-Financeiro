"use client";

import { Bell, Search, User, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function TopBar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <header className="flex items-center justify-between h-20 px-8 border-b border-white/10 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-white">Olá, Victor 👋</h2>
                <p className="text-sm text-zinc-400">Bem-vindo de volta ao seu painel.</p>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar transações..."
                        className="w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-neonGreen/50 focus:ring-1 focus:ring-neonGreen/50 transition-all"
                    />
                </div>

                <div className="relative">
                    <button
                        onClick={() => {
                            setShowNotifications(!showNotifications);
                            setShowProfileMenu(false);
                        }}
                        className="relative p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                    >
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-softRed rounded-full ring-2 ring-zinc-950"></span>
                    </button>

                    <AnimatePresence>
                        {showNotifications && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute right-0 mt-2 w-80 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                            >
                                <div className="p-4 border-b border-white/5">
                                    <h3 className="font-semibold text-white">Notificações</h3>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="p-4 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5">
                                        <p className="text-sm text-white font-medium">Pagamento Recebido</p>
                                        <p className="text-xs text-zinc-400 mt-1">Você recebeu R$ 2.500,00 de Freelance Project.</p>
                                        <p className="text-xs text-zinc-500 mt-2">Há 2 horas</p>
                                    </div>
                                    <div className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                                        <p className="text-sm text-white font-medium">Alerta de Segurança</p>
                                        <p className="text-xs text-zinc-400 mt-1">Novo login detectado em São Paulo, SP.</p>
                                        <p className="text-xs text-zinc-500 mt-2">Há 5 horas</p>
                                    </div>
                                </div>
                                <div className="p-3 text-center border-t border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                                    <span className="text-xs text-neonGreen font-medium">Marcar todas como lidas</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="relative">
                    <button
                        onClick={() => {
                            setShowProfileMenu(!showProfileMenu);
                            setShowNotifications(false);
                        }}
                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-neonGreen to-emerald-600 flex items-center justify-center text-black font-bold hover:ring-2 hover:ring-white/20 transition-all"
                    >
                        VB
                    </button>

                    <AnimatePresence>
                        {showProfileMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                            >
                                <div className="p-4 border-b border-white/5">
                                    <p className="text-sm font-medium text-white">Victor Barbosa</p>
                                    <p className="text-xs text-zinc-400">victor@example.com</p>
                                </div>
                                <div className="p-2">
                                    <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <User size={16} />
                                        Meu Perfil
                                    </Link>
                                    <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <Settings size={16} />
                                        Configurações
                                    </Link>
                                    <div className="h-px bg-white/5 my-1"></div>
                                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-softRed hover:bg-softRed/10 rounded-lg transition-colors">
                                        <LogOut size={16} />
                                        Sair
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}

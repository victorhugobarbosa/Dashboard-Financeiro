"use client";

import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import { User, Bell, Shield, CreditCard, Save, Check } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("profile");
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Alertas de Transação", desc: "Receba notificações quando houver movimentação.", active: true },
        { id: 2, title: "Resumo Semanal", desc: "Um resumo da sua performance financeira.", active: true },
        { id: 3, title: "Novidades e Ofertas", desc: "Atualizações sobre novos recursos e promoções.", active: true },
        { id: 4, title: "Segurança", desc: "Alertas sobre tentativas de login e mudanças de senha.", active: true }
    ]);

    const toggleNotification = (id: number) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, active: !n.active } : n
        ));
    };

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm animate-in fade-in duration-300">
                        <h3 className="text-lg font-semibold text-white mb-6">Informações Pessoais</h3>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-neonGreen to-emerald-600 flex items-center justify-center text-black text-2xl font-bold">
                                VB
                            </div>
                            <div>
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors">
                                    Alterar Foto
                                </button>
                                <p className="text-xs text-zinc-500 mt-2">JPG, GIF ou PNG. Max 1MB.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Nome Completo</label>
                                <input
                                    type="text"
                                    defaultValue="Victor Barbosa"
                                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Email</label>
                                <input
                                    type="email"
                                    defaultValue="victor@example.com"
                                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Telefone</label>
                                <input
                                    type="tel"
                                    defaultValue="+55 (11) 99999-9999"
                                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Cargo / Profissão</label>
                                <input
                                    type="text"
                                    defaultValue="Software Engineer"
                                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-neonGreen text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                                <Save size={18} />
                                Salvar Alterações
                            </button>
                        </div>
                    </div>
                );
            case "notifications":
                return (
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm animate-in fade-in duration-300">
                        <h3 className="text-lg font-semibold text-white mb-6">Preferências de Notificação</h3>
                        <div className="space-y-6">
                            {notifications.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-4 rounded-xl bg-zinc-950/50 border border-white/5 cursor-pointer hover:bg-white/5 transition-colors group"
                                    onClick={() => toggleNotification(item.id)}
                                >
                                    <div>
                                        <p className="font-medium text-white group-hover:text-neonGreen transition-colors">{item.title}</p>
                                        <p className="text-sm text-zinc-400">{item.desc}</p>
                                    </div>
                                    <div className={clsx(
                                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                        item.active ? "bg-neonGreen" : "bg-zinc-700"
                                    )}>
                                        <span className={clsx(
                                            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                            item.active ? "translate-x-6" : "translate-x-1"
                                        )} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "security":
                return (
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm animate-in fade-in duration-300">
                        <h3 className="text-lg font-semibold text-white mb-6">Segurança da Conta</h3>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <label className="text-sm font-medium text-zinc-400">Alterar Senha</label>
                                <div className="grid grid-cols-1 gap-4">
                                    <input type="password" placeholder="Senha Atual" className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50" />
                                    <input type="password" placeholder="Nova Senha" className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50" />
                                    <input type="password" placeholder="Confirmar Nova Senha" className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neonGreen/50" />
                                </div>
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors">
                                    Atualizar Senha
                                </button>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-white">Autenticação de Dois Fatores (2FA)</p>
                                        <p className="text-sm text-zinc-400">Adicione uma camada extra de segurança.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-neonGreen/10 text-neonGreen hover:bg-neonGreen/20 text-sm font-medium rounded-lg transition-colors">
                                        Ativar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "subscription":
                return (
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm animate-in fade-in duration-300">
                        <h3 className="text-lg font-semibold text-white mb-6">Seu Plano</h3>
                        <div className="bg-gradient-to-br from-zinc-800 to-black p-6 rounded-xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <CreditCard size={120} />
                            </div>
                            <div className="relative z-10">
                                <span className="px-3 py-1 rounded-full bg-neonGreen/20 text-neonGreen text-xs font-bold uppercase tracking-wider">Pro Plan</span>
                                <h2 className="text-3xl font-bold text-white mt-4">R$ 29,90 <span className="text-lg text-zinc-400 font-normal">/ mês</span></h2>
                                <p className="text-zinc-400 mt-2 mb-6">Próxima cobrança em 15 de Dezembro, 2025</p>
                                <div className="space-y-3 mb-8">
                                    {["Contas Ilimitadas", "Cartões Virtuais", "Relatórios Avançados", "Suporte Prioritário"].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-white">
                                            <div className="p-1 rounded-full bg-neonGreen/20 text-neonGreen"><Check size={12} /></div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors">
                                        Gerenciar Assinatura
                                    </button>
                                    <button className="px-6 py-2.5 bg-transparent border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const tabs = [
        { id: "profile", name: "Meu Perfil", icon: User },
        { id: "notifications", name: "Notificações", icon: Bell },
        { id: "security", name: "Segurança", icon: Shield },
        { id: "subscription", name: "Assinatura", icon: CreditCard },
    ];

    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <TopBar />

                <div className="p-8 max-w-5xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Configurações</h1>
                        <p className="text-zinc-400 text-sm">Gerencie seus dados e preferências.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Settings Sidebar */}
                        <div className="space-y-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={clsx(
                                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200",
                                            isActive
                                                ? "bg-white/10 text-white shadow-lg"
                                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        <Icon size={18} className={isActive ? "text-neonGreen" : ""} />
                                        {tab.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

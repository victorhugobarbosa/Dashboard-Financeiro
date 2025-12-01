"use client";

import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <TopBar />
                <div className="p-8 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
                    <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm text-center">
                        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-zinc-400">Esta funcionalidade estará disponível em breve.</p>
                        <button className="mt-6 px-6 py-2 bg-neonGreen text-black font-semibold rounded-full hover:bg-emerald-400 transition-colors">
                            Voltar ao Início
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import KPICard from "@/components/KPICard";
import CashFlowChart from "@/components/CashFlowChart";
import CreditCard from "@/components/CreditCard";
import TransactionList from "@/components/TransactionList";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
      <Sidebar />

      <main className="flex-1 md:ml-64 transition-all duration-300">
        <TopBar />

        <div className="p-8 space-y-8">
          {/* KPI Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Saldo Total"
              amount="R$ 48.250,00"
              change="+12.5%"
              trend="up"
              icon={Wallet}
            />
            <KPICard
              title="Receitas do Mês"
              amount="R$ 15.300,00"
              change="+8.2%"
              trend="up"
              icon={TrendingUp}
            />
            <KPICard
              title="Despesas do Mês"
              amount="R$ 4.280,00"
              change="-2.4%"
              trend="down"
              icon={TrendingDown}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <CashFlowChart />
            </div>

            {/* Cards & Transactions - Right Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Meus Cartões</h3>
                <CreditCard />
              </div>

              <div className="h-[400px]">
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

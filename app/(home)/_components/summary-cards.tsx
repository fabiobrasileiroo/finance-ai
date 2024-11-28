import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

const SummaryCards = () => {
  return (
    // PRIMEIRO CARD
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex-row items-center gap-2">
          <WalletIcon className="mt-1" size={16} />
          <p className="text-white opacity-70">Saldo</p>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">R$2.700</p>
        </CardContent>
        {/* OUTROS CARDS */}
        <div className="grid grid-cols-3 gap-6">
          <SummaryCard
            icon={<PiggyBankIcon size={14} />}
            title="Investimento"
            amount={2500}
            size="large"
          />
          <SummaryCard
            icon={<TrendingUpIcon size={14} className="text-primary" />}
            title="Receita"
            amount={2500}
            size="large"
          />
          <SummaryCard
            icon={<TrendingDownIcon size={14} className="text-red-500" />}
            title="Despesas"
            amount={2500}
            size="large"
          />
        </div>
      </Card>
    </div>
  );
};

export default SummaryCards;

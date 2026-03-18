import { useVaultData } from "../../hooks/useVaultData";
import WalletCard from "./WalletCard";
import LedgerList from "./LedgerList";
import SummaryHeader from "./SummaryHeader";

export default function Dashboard() {
  const data = useVaultData();

  if (!data) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <SummaryHeader total={data.totalVaultBalance} rules={data.rulesVersion} />

      <div className="wallet-grid">
        {Object.entries(data.wallets).map(([name, balance]) => (
          <WalletCard key={name} name={name} balance={balance} />
        ))}
      </div>

      <LedgerList inflow={data.lastInflow} distribution={data.lastDistribution} />
    </div>
  );
}

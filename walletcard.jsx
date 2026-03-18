export default function WalletCard({ name, balance }) {
  return (
    <div className="wallet-card">
      <h3>{name}</h3>
      <p>{balance}</p>
    </div>
  );
}

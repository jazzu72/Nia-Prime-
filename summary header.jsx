export default function SummaryHeader({ total, rules }) {
  return (
    <div className="summary-header">
      <h1>Vault Balance: {total}</h1>
      <p>Rules Version: {rules}</p>
    </div>
  );
}

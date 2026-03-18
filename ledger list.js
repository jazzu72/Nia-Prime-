export default function LedgerList({ inflow, distribution }) {
  return (
    <div className="ledger-list">
      <h2>Recent Activity</h2>

      {inflow && (
        <div className="ledger-item">
          <strong>Last Inflow:</strong> {inflow.amount} at {inflow.time}
        </div>
      )}

      {distribution && (
        <div className="ledger-item">
          <strong>Last Distribution:</strong> {distribution.total} at {distribution.time}
        </div>
      )}
    </div>
  );
}

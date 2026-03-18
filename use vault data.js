import { useEffect, useState } from "react";
import { getVaultSummary } from "../api/vault";

export function useVaultData(refreshInterval = 3000) {
  const [data, setData] = useState(null);

  async function refresh() {
    try {
      const summary = await getVaultSummary();
      setData(summary);
    } catch (err) {
      console.error("Vault refresh failed:", err);
    }
  }

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  return data;
}

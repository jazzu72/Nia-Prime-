export async function getVaultSummary() {
  const res = await fetch("/vault/founder/summary");
  if (!res.ok) throw new Error("Failed to load Vault data");
  return res.json();
}

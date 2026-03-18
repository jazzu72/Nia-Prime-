
import { authFetch } from "./authFetch";

export function getVaultSummary() {
  return authFetch("/vault/founder/summary");
}

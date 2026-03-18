export async function authFetch(url) {
  const token = localStorage.getItem("vault_token");

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (res.status === 403) {
    throw new Error("Unauthorized");
  }

  return res.json();
}

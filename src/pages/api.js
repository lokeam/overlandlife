export async function getRigs(id) {
  const url = id ? `/api/rigs/${id}` : "/api/rigs"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch rigs",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.rigs
}

export async function getHostRigs(id) {
  const url = id ? `/api/host/rigs/${id}` : "/api/host/rigs"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch rigs",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.rigs
}
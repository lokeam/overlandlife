export async function getRigs (signal) {
  const response = await fetch('/api/rigs', { signal });
  const data = await response.json();
  console.log('testing fetch data: ', data);
  return data;
}

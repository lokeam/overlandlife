export async function getRigs (signal) {
  const response = await fetch('/api/rigs', { signal });

  if (!response.ok) {
    throw {
      message: 'Failed to fetch vehicles',
      statusText: response.statusText,
      status: response.status
    }
  }

  const data = await response.json();
  console.log('testing fetch data: ', data);
  return data;
}

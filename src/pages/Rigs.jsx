import { useState, useEffect } from 'react';

export default function Rigs () {
/*
  - fetch data upon page load

  Garbage Collection:
  - make sure component is mounted before making fetch
  - abort fetch if/when component unmounts
  - clean up side effects after getting data

  State:
  - data
  - loading state

  Error Handling:
  - wrap in try catch
  - save fetch errors

*/
  const [rigs, setRigs] = useState([])
  const url = '/api/rigs';

  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();

    const fetchData = async (url) => {
      const response = await fetch(url, { signal: abortController.signal });
      const data = await response.json();

      if (isMounted) setRigs(data.rigs);
    }

    fetchData(url);

    return () => {
      console.log('cleaning up side effects');
      abortController.abort();
      isMounted = false;
    }
  }, []);

  const rigCards = rigs.map(rig => (
    <div key={rig.id} className="rig-card">
      <div className="rig-info">
        <h3>{rig.name}</h3>
        <p>${rig.price}<span>/day</span></p>
      </div>
      <i className={`rig-type ${rig.type} selected`}>{rig.type}</i>
    </div>
  ))

  return (
    <div>
      <h1>Getting there is half the fun #OverlandingRigs</h1>
      <div className="rig-list">
        {rigCards}
      </div>
    </div>

  );
}
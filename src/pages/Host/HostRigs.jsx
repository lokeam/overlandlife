import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HostRigs() {
  const [rigs, setRigs] = useState([]);
  const url = '/api/host/rigs';

  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();

    const fetchData = async (url) => {

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (isMounted) {
          const data = await response.json();
          setRigs(data.rigs);
        }
      } catch(error) {
        if (error.message !== 'AbortError') {
          console.log('Fetch error: ', error);
        }
      }
    };

    fetchData(url);

    return () => {
      console.log('cleaning up side effects...');
      isMounted = false;
      abortController.abort();
    }
  },[]);

  const hostRigElements = rigs.map((rig) => (
    <Link
      to={`/host/rigs/${rig.id}`}
      key={rig.id}
      className="host-rig-link-wrapper"
    >
      <div className="host-rig-single" key={rig.id}>
        <img src={`${rig.imageUrl}`} alt={`Photo of ${rig.name}`} />
        <div className="host-rig-info">
          <h3>{rig.name}</h3>
          <p>${rig.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-rigs-title">Your listed vehicles</h1>
      <div className="host-rigs-list">
        {
          rigs.length > 0 ? (
            <section>
              {hostRigElements}
            </section>
          ) : (
            <p>Loading vehicles...</p>
          )
        }
      </div>
    </section>
  );
}
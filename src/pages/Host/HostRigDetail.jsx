import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HostRigDetail () {
  const params = useParams();
  const [currentRig, setCurrentRig ] = useState(null);
  const url = `/api/host/rigs/${params.id}`;

  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();

    const fetchData = async (url) => {

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (isMounted) {
          const data = await response.json();
          setCurrentRig(data.rigs);
        }
      } catch(error) {
        if (error.name !== 'AbortError') {
          console.log('error fetching data outside of abort controller: ', error);
        }
      }
    };

    fetchData(url);

    return () => {
      console.log('cleaning up side effects');
      isMounted = false;
      abortController.abort();
    }
  }, [url]);

  return (
    <div className="rig-detail-container">
      {
        currentRig ? (
          <div className="rig-detail-container">
            <img alt={currentRig.name} src={currentRig.imageUrl} />
            <i className={`rig-type ${currentRig.type} selected`}>{currentRig.type}</i>
            <h2>{currentRig.name}</h2>
            <p className="rig-price"><span>${currentRig.price}</span>/day</p>
            <p>{currentRig.description}</p>
            <button className="link-button">Rent this rig</button>
          </div>
        ) : <p>Loading...</p>
      }
    </div>
  );
}
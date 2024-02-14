import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RigsDetail () {
  const params = useParams();
  const [rig, setRig ] = useState(null);
  const url = `/api/rigs/${params.id}`;

  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();

    const fetchData = async (url) => {

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (isMounted) {
          const data = await response.json();
          setRig(data.rigs);
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
        rig ? (
          <div className="rig-detail-container">
            <img alt={rig.name} src={rig.imageUrl} />
            <i className={`rig-type ${rig.type} selected`}>{rig.type}</i>
            <h2>{rig.name}</h2>
            <p className="rig-price"><span>${rig.price}</span>/day</p>
            <p>{rig.description}</p>
            <button className="link-button">Rent this rig</button>
          </div>
        ) : <p>Loading...</p>
      }
    </div>
  );
}
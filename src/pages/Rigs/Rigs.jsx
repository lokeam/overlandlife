import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Rigs () {
  /*
    Fetch Data from API

    State:
    - dataFromAPI
    - isLoading
    - fetchErrors

    Error Handling:
    - wrap fetch req in try-catch-finally block
    - console out errors, make sure error is not too explicit

    Garbage Collection:
    - close out side effects in useEffect
      - don't make requests if not mounted
      - abort requests if/when unmounted
  */
 const [rigData, setRigData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [searchParams, setSearchParams] = useSearchParams();

 const typeFilter = searchParams.get("type");
 const url = '/api/rigs';

  useEffect(() => {
    let isMounted = true;
    let abortController = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (isMounted) {
          const data = await response.json();
          setRigData(data.rigs);
        }
      } catch(error) {
        if (error.name !== 'AbortError') {
          console.log('error fetching data outside of abort controller: ', error);
        }

        // optionally save state for fetchErrors here
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(url);

    return () => {
      console.log('cleaning up side effects');
      isMounted = false;
      abortController.abort();
    }
  }, []);

  const renderedRigs = typeFilter
    ? rigData.filter(rig => rig.type === typeFilter)
    : rigData;

  const rigCards = renderedRigs.map(rig => (
    <div key={rig.id} className="rig-card">
      <Link to={rig.id}>
        <img alt={rig.name} src={rig.imageUrl} />
        <div className="rig-info">
          <h3>{rig.name}</h3>
          <p>${rig.price}<span>/day</span></p>
        </div>
        <i className={`rig-type ${rig.type} selected`}>{rig.type}</i>
      </Link>
    </div>
  ));

  const handleProductFilter = (key, value) => {
    setSearchParams(previousParams => {
      if (value === null) {
        previousParams.delete(key);
      } else {
        previousParams.set(key, value);
      }
    });
  }

  return (
    <div className="rig-list-container">
      <h1>Explore our vehicle options</h1>
      <div className="rig-list-filter-buttons">
        <button
          className={`rig-type simple ${typeFilter === "simple" ? "selected" : ""}`}
          onClick={() => handleProductFilter("type", "simple")}>Simple</button>
        <button
          className={`rig-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          onClick={() => handleProductFilter("type", "rugged")}>Rugged</button>
        <button
          className={`rig-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          onClick={() => handleProductFilter("type", "luxury")}>Luxury</button>
       {typeFilter ?
          (
            <button
              className="rig-type clear-filters"
              onClick={() => handleProductFilter("type", null)}>Reset filter</button>
          ) : null}
      </div>
      <div className="rig-list">
        { isLoading && <div>Loading vehicles...</div> }
        { !isLoading && rigCards }
      </div>
    </div>
  );
}
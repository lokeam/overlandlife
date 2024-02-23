import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getRigs } from '../../api';

export function loader() {
  return getRigs();
}

export default function Rigs () {
 const [searchParams, setSearchParams] = useSearchParams();
 const rigData = useLoaderData();

 const typeFilter = searchParams.get("type");

  const renderedRigs = typeFilter
    ? rigData.filter(rig => rig.type === typeFilter)
    : rigData;

  const rigCards = renderedRigs.map(rig => (
    <div key={rig.id} className="rig-card">
      <Link
        to={rig.id}
        state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter
            }}
      >
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
        { rigCards }
      </div>
    </div>
  );
}

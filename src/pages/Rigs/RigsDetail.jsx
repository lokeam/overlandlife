import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getRigs } from "../api";

export function loader ({ params }) {
  return getRigs(params.id);
}

export default function RigsDetail () {
  const location = useLocation();
  const rig = useLoaderData();

  const searchState = location.state?.search || '';
  const rigTypeState = location.state?.type || 'all';

  return (
    <div className="rig-detail-container">
      <Link
        to={`..${searchState}`}
        relative="path"
        className="back-button"
      >&larr; <span>Back to {rigTypeState} rigs</span></Link>
      {
        rig ? (
          <div className="rig-detail">
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
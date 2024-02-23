import { Link, useLoaderData } from 'react-router-dom';
import { getHostRigs } from '../../api';

export async function loader() {
  return getHostRigs()
}

export default function HostRigs() {
  const rigs = useLoaderData();

  const hostRigElements = rigs.map((rig) => (
    <Link
      to={rig.id}
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
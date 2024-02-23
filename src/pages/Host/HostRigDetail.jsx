import React from 'react';
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostRigs } from '../../api';

export async function loader ({params}) {
  return getHostRigs(params.id);
}

export default function HostRigDetail () {
  const currentRig = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all rigs</span></Link>
        <div className="rig-detail-container">
          {
            currentRig ? (
              <>
                <div className="rig-detail">
                  <img alt={currentRig.name} src={currentRig.imageUrl} />
                  <div className="host-rig-detail-info-text">
                    <i className={`rig-type rig-type-${currentRig.type}`}>{currentRig.type}</i>
                    <h2>{currentRig.name}</h2>
                    <p className="rig-price"><span>${currentRig.price}</span>/day</p>
                  </div>
                </div>
                <nav className="host-rig-detail-nav">
                  <NavLink end style={({ isActive }) => isActive ? activeStyles: null} to=".">Details</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyles: null} to="pricing">Pricing</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyles: null} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={{ currentRig }} />
              </>
            ) : <p>Loading...</p>
          }
        </div>
    </section>
  );
}
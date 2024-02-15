import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostRigDetail () {
  const params = useParams();
  const [currentRig, setCurrentRig ] = useState(null);
  const url = `/api/host/rigs/${params.id}`;

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

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
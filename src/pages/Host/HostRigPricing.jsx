import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostRigPricing() {
  const { currentRig } = useOutletContext();

  return (
    <h3 className="host-rig-price">${currentRig.price}<span>/day</span></h3>
  );
}
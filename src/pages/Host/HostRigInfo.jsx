import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostRigInfo() {
  const { currentRig } = useOutletContext();

  return (
    <section>
      <h4>Name: <span>{currentRig.name}</span></h4>
      <h4>Category: <span>{currentRig.type}</span></h4>
      <h4>Description: <span>{currentRig.description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  );
}
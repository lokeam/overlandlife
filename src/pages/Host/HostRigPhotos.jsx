import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostRigPhotos() {
  const { currentRig } = useOutletContext();

  return (
    <img src={currentRig.imageUrl} className="host-rig-detail-image" />
  );
}
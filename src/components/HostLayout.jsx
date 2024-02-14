import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function HostLayout () {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  return (
    <>
      <nav>
        <NavLink end style={({isActive}) => isActive ? activeStyles: null} to=".">Dashboard</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyles: null} to="income">Income</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyles: null} to="rigs">Rigs</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyles: null} to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
    const location = useLocation();
  return (
    <nav>
    <ul>
      <li>
        <NavLink to ="/"  className={location.pathname === "/" ? 'active':''}>Accueil</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to ="/todolist"  className={location.pathname === "/todolist" ? 'active':''}>Exercice 1</NavLink> 
      </li>
      <li className="navbar__item">
        <NavLink to ="/clicker"  className={location.pathname === "/clicker" ? 'active':''}>Exercice 2 </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to ="/user/:id"  className={location.pathname === "/user/:id" ? 'active':''}>Exercice 3</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to ="/anime"  className={location.pathname === "/anime" ? 'active':''}>Exercice 5</NavLink>
      </li>
    </ul>
  </nav>
  );
}

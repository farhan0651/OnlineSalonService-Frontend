import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './styled';

const Navigation = () => {
  const location=useLocation();
  const LINKS=[
    {to:'/',text:"Homepage"},
    {to:"/Appointments",text:"Appointment"},
    {to:'/Oders',text:"Oders"},
    {to:'/Services',text:"Service"},
    {to:'/Payment',text:"Payment"}
  ]
    return (
    <div>
        <NavList>{LINKS.map((item)=>(
            <LinkStyled key={item.to} className={item.to===location.pathname ? 'active':''}><Link to={item.to}>{item.text}</Link></LinkStyled>
        ))}</NavList>
    </div>
  )
}

export default Navigation
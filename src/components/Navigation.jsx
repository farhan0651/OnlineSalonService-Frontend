import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const LINKS=[
    {to:'/',text:"Homepage"},
    {to:"/Appointments",text:"Appointment"},
    {to:'/Oders',text:"Oders"},
    {to:'/Services',text:"Service"},
    {to:'/Payment',text:"Payment"}
  ]
    return (
    <div>
        <ul>{LINKS.map((item)=>(
            <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
        ))}</ul>
    </div>
  )
}

export default Navigation
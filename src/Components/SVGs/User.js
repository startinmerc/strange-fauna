import React from "react";

const User = ({ size = 48, color = "#000000", strokeWidth="1" }) => (
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
  viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} role="img" 
    strokeLinecap="butt" strokeLinejoin="arcs" className="icon user">
    <title>User Icon</title>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default User;

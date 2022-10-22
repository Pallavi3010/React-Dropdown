import React from 'react'

function DropdownItem(props) {
  // Added onClick event for hiding dropdownlist
  return (
    <div className="dropdown-item" onClick={() => document.getElementById("items").style.display="none"}>{props.value}</div>
  )
}

export default DropdownItem
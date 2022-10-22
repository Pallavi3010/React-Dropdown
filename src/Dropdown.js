import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown(props) {
  
  return (
    <div>
      {/* Added mouseover event for displaying array elements*/}
      <div className="select" onMouseOver={()=>document.getElementById("items").style.display="block"}>
      Select
     
    </div>
    <div id="items">   
    {/* Displaying all array elements */}  
    {
      props.array.map((val, i) =>{
        return <DropdownItem key={i} value={val} />
      })
    }
   </div>
   </div>
    
  )
}

export default Dropdown
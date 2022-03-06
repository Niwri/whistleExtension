import React from 'react'

const Header = ({name, icon}) => {
  return (
    <div className="headerContainer">
        <p>{name}</p>
        <img src={icon} alt=""/>
    </div>
  )
}

export default Header
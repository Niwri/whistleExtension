import React from 'react'

const Button = ({text, image, link, nameClass}) => {
  return (
    <div className="buttonMainContainer">
      <img src={image} alt=""/>
      <a href="link" target="_blank" rel="noopener noreferrer">
        <div className={`${nameClass}`}>
          <p>{text}</p>
        </div>
      </a>
    </div>
  )
}

export default Button
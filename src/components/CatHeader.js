import React from 'react'

export default function CatHeader({text, url}) {
  return (
    <div className="header">
      <img src={url} className="header-image" />
      <h1 className="header-text">{text}</h1>
    </div>
  )
}

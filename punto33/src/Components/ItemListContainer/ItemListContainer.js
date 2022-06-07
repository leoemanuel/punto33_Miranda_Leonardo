import React from 'react'

export default function ItemListContainer({titulo, text, name}) {

  
  
  return (
    <main className="App-main">
        <h1>{titulo}</h1>
        <h2>{text}</h2>
        <h2>{name}</h2>
      </main>
  )
}

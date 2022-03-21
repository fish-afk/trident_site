import React from 'react'
import Top from "./Top"
import Center from "./Center"

export default function Main_Home() {
  return (
    <div>
        <div className="container-fluid"><Top/></div>
        <div className="container-fluid"><Center/></div>
    </div>
  )
}

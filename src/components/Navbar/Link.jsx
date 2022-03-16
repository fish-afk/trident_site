import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Links(props) {
  return (
    <Link to={props.uri} className="link hover flexer">{props.content}
    <div className="spaceplease">|</div>
    </Link>
  )
}

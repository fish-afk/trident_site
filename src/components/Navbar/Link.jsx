import React from 'react'

export default function Links(props) {
  return (
    <a className="link hover flexer"  href={props.uri}>{props.content}
    <div className="spaceplease">|</div>
    </a>
  )
}

import React from 'react'

export default function Item(props) {

  return (

    <React.Fragment>

      <div className="card col-6">
        <img src={props.img_src} className="prods" style={{border: "1px solid aqua"}} width="50%" height="65%"/>
        <p className="text-warning">{props.name}</p>
        <p>{props.description}</p>
        <button>Add to cart</button>

      </div>
        
    </React.Fragment>

  )
}

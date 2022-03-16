import React from 'react'

export default function Item(props) {

  return (

    <React.Fragment>

      <div class="card">
        <img src={props.img_src} width="90%" height="65%"/>
        <p>{props.name}</p>
        <button>Add to cart</button>

      </div>
        
    </React.Fragment>

  )
}

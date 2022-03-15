import React from 'react'
import image1 from "../../Assets/image1.jpg"
import image3 from "../../Assets/image3.jpg.jpg"

export default function Top() {
  return (
    <React.Fragment>

<section class="description">


<div class="descrption">
    <h1 className="guide">Get high quality jewelerry.</h1>
    <p id="bodytxt"> The best place in order to get the most 
        affordable jewelerry. 
    </p>
</div>
</section>

<div class='flex'>
    

    <div class='BOX'>
         <img id="r1e" width="50%" height="90%" src={image1} alt="image1"></img>
    </div>

    <div class='BOX'>
        <img id="r2e" width="50%" height="90%" src={image3} alt="image1"/>
    </div>

   

</div>

    </React.Fragment>
  )
}

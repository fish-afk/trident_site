import React from 'react'
import image2 from "../../Assets/jewelry-accessories-realistic-set-with-rings-earrings-black-background_1284-27174.webp"
import image4 from "../../Assets/image4.jpg.jpg"

export default function Center() {
  return (
    <div>

    <section class="rings-bracelets">
        <div class="block">

        <p>Diamond Ring, Rare diamonds from southern america founded in the year 1890 very rare to find these days as it has been put as exclusive diamonds. 17k White Diamond/0.50 CTW. $1000.00.
        </p>
        </div>

        <img width="50%" height="50%" src={image2} alt="image1"/>
        
    </section>

    <section class="rings-bracelets">
      
           <img id="braca" width="50%" height="50%" src={image4}alt="image1"/>

           <div class="block">

            <p>Gold pendant, Gold found in Northern Europe it white-gold with more authentic texture found in the year 1900 ores that are up to date one of common golds. 14k White Gold/0.50 CTW. $2000.00.
            </p>
         </div>
        
    </section>

    </div>
  )
}

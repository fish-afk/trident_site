import React from 'react';
import Item from "./Item";
import ring1 from "../../Assets/products/image7.jpg";
import ring2 from "../../Assets/products/image8.jpg";
import ring3 from "../../Assets/products/image9.jpg";
import ring4 from "../../Assets/products/image10.jpg";
import ring5 from "../../Assets/products/image13.jpg";
import ring6 from "../../Assets/products/image4.jpg";

import Necklace1 from "../../Assets/products/image15.jpg"
import Necklace2 from "../../Assets/products/image16.jpg"
import Necklace3 from "../../Assets/products/image17.jpg"
import Necklace4 from "../../Assets/products/image24.jpg"
import Necklace5 from "../../Assets/products/image25.jpg"
import Necklace6 from "../../Assets/products/image23.jpg"

export default function Products_Main() {
  return (
   <React.Fragment>

    <section id="products">

    <h1>Rings</h1>
    <div id="Rings" className="containers bg-weird">
      <Item img_src={ring1} name="tobefilled" description="tobefilled" />
      <Item img_src={ring2} name="tobefilled" description="tobefilled" />
      <Item img_src={ring3} name="tobefilled" description="tobefilled" />
      
    </div> 

    <div id="Rings" className="containers bg-weird">
    <Item img_src={ring4} name="tobefilled" description="tobefilled" />
      <Item img_src={ring5} name="tobefilled" description="tobefilled" />
      <Item img_src={ring6} name="tobefilled" description="tobefilled" />

    </div>

    <h1>Necklaces</h1>
    <div id="Necklaces" className="containers bg-dark">

      <Item img_src={Necklace1} name="tobefilled" description="tobefilled" />
      <Item img_src={Necklace2} name="tobefilled" description="tobefilled" />
      <Item img_src={Necklace3} name="tobefilled" description="tobefilled" />
      


    </div>

    <div id="Necklaces" className="containers bg-dark">
    <Item img_src={Necklace4} name="tobefilled" description="tobefilled" />
      <Item img_src={Necklace5} name="tobefilled" description="tobefilled" />
      <Item img_src={Necklace6} name="tobefilled" description="tobefilled" />
      </div>
    </section>

   </React.Fragment>
  )
}

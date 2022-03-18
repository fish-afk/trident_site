import React from 'react';
import Item from "./Item";
import {useQuery} from "react-query"

export default function Products_Main() {
  

  const fetchProducts = async () => {
    const res = await fetch("https://data.mongodb-api.com/app/trident-jewels-xjpws/endpoint/getallproducts");
    return res.json();
  }
 
  const {data, status} = useQuery("products", fetchProducts);



  if(status === "loading"){
    return (<div>Loading...</div>);
  }

  if(status === "error"){
    return (<div>Error...</div>)
  }

  return (
   <React.Fragment>

    <section id="products">

    <h2><center>Indulge into the finest of regalia</center></h2>
    <div className="bg-weird">
    <div id="Rings" className="container-fluid row text-center mt-5">
      {data.products.map((product, key) => (
        <Item key={key} img_src={product.img_src} name={product.name} description={product.description}/>
      ))}
      
    </div> 
    </div>

    </section>

   </React.Fragment>
  )
}

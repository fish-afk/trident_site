import React from 'react';
import Item from "./Item";
import {useQuery} from "react-query"
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {BsSearch} from "react-icons/bs"

export default function Products_Main() {
  

  const fetchProducts = async () => {
    const res = await fetch("https://data.mongodb-api.com/app/trident-jewels-xjpws/endpoint/getallproducts");
    return res.json();
  }
 
  const {data, status} = useQuery("products", fetchProducts);



  if(status === "loading"){
    return (<div><SkeletonTheme animation="wave" baseColor="#f5deb3" highlightColor="#888"><Skeleton amount={1} height="70vh"/>
    <Skeleton /><Skeleton /> <Skeleton />
   </SkeletonTheme></div>);
  }

  if(status === "error"){
    return (<div className="m-5 text-danger p-5"><center><h1>An error occurred while loading <br/> 404 error.</h1></center></div>)
  }

  return (
   <React.Fragment>

    <section id="products">

    <span><h2 className="guide2"><center>Indulge into the finest of regalia</center></h2><center className="mb-2"><input className="product-search" placeholder="search"></input>
    <button class="mx-4 px-3 btn-primary searchbtn"><BsSearch/></button>
      </center></span>
    <div className="bg-weird ms-5">
    <div id="Rings" className="row text-center">
      {data.products.map((product, key) => (
        <Item key={key} item={product} price={product.price["$numberInt"]} img_src={product.img_src} name={product.name} description={product.description}/>
      ))}
      
    </div> 
    </div>

    </section>
    

   </React.Fragment>
  )
}

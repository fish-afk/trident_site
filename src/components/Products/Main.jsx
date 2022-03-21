import React from 'react';
import Item from "./Item";
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {BsSearch} from "react-icons/bs"
import { useState, useEffect } from 'react';
import ProductDataService from "../../Http/getproducts";
import QueryDataService from "../../Http/queryproducts";

export default function Products_Main() {

  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => 
     refreshList()
  ,[]);

  const fetchData = async () => {
    setStatus("loading")
    await ProductDataService.get().then((res) => {
    setData(res.data.products);
    
    setStatus("finished");
      
    }).catch((error) => {setStatus("error");})
  }

  const refreshList = () => {
    fetchData()
     
  };

  const searchup = async () => {
    let value = document.getElementById("searcher").value;
    setStatus("loading")
    await QueryDataService.querier(value).then((res) => {
      

      setData(res.data.products);
      setStatus("finished");
        
      }).catch((error) => {setStatus("error");})
  }

  if(status === "loading"){
    return (<div><SkeletonTheme animation="wave" baseColor="#f5deb3" highlightColor="#888"><Skeleton amount={1} height="70vh"/>
    <Skeleton /><Skeleton /> <Skeleton />
   </SkeletonTheme></div>);
  }

  if(status === "error"){
    return (<div className="m-5 text-danger p-5"><center><h1>An error occurred while loading <br/> 404 error.</h1></center></div>)
  }

  const renderer = () => {
    return(data.length < 1 ? <center><h1 className="mt-5 mb-5 text-warning">No search results found</h1></center> : data.map((product, key) => (
      <Item key={key} item={product} price={product.price["$numberInt"]} img_src={product.img_src} name={product.name} description={product.description}/>
  )));
  }

  return (
   <React.Fragment>

    <section id="products">

    <span><h2 className="guide2"><center>Indulge into the finest of regalia</center></h2><center className="mb-2">
      <input className="product-search" placeholder="search" id="searcher"></input>
    <button className="mx-4 px-3 btn-primary searchbtn" onClick={searchup}>
      <BsSearch/></button>
      </center></span>
    <div className="bg-weird ms-5">

    <div id="Rings" className="row text-center">
    {renderer()}
    </div> 
    </div>

    </section>
    

   </React.Fragment>
  )
}

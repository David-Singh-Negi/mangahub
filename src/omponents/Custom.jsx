import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../pages/Spinner";
import { useState,useEffect } from "react";
import Product from "../pages/Product";

export const Custom = () => {
    const [loading ,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const { query } = useParams();

    async function searchData(){
        setLoading(true);
        try{
            const API_URL = `https://api.jikan.moe/v4/anime?q=${query}`;
            const res = await fetch(API_URL);
            const result =  await res.json();
            setPosts(result.data);
        }
        catch(error){
            console.log("error");
        }
        setLoading(false);
    }

    useEffect( () => {
        searchData();
    },[query]);
    
  return (
    <div className="mt-[100px] lg:mt-[120px] md:mt-[20px] sm:mt-[100px]">
      <div className='flex flex-col justify-center items-center'>
        {loading ? (
          <Spinner />
        ) : posts.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-7 mx-auto gap-x-7 gap-y-7 max-w-6xl">
            {posts.map((post, index) => (
              <Product key={index} post={post}/>
              
            ))}
          </div>
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

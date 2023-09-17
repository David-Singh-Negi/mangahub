import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import PopularCard from "./RenderPages/PopularCard"

const Popular = () => {

  const API_URL = "https://api.jikan.moe/v4/top/anime?filter=bypopularity";

  const[loading,setLoading] = useState(false);
  const[posts,setPosts]=useState([]);

  async function PopularData(){
    try{
      setLoading(true);
      const res=await fetch(API_URL);
      const result = await res.json();
      // console.log(result.data);
      setPosts(result.data);
    }
    catch(error){
      console.log("error");
    }
    setLoading(false);
  }

  useEffect( () =>{
    PopularData();
  },[]);

  return (
    <div className=' mt-[100px] lg:mt-[120px] md:mt-[20px] sm:mt-[100px]'>
      <div className='flex flex-col justify-center items-center'>
        {
          loading ? <Spinner/> :
          posts.length > 0 ?
          (<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7 mx-auto gap-x-7 gap-y-7 max-w-6xl'>
            {
              posts.map( (post,index) => (
                <PopularCard key={index} post={post}/>
              ))
            }
          </div>) :
          (<div>
            No Data Found
          </div>)
        }
      </div>
    </div>
  )
}

export default Popular
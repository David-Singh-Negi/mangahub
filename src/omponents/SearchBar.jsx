import React from 'react'
import { useState } from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const[query,setQuery]=useState("")

    function changeHandler(event){
        setQuery(event.target.value);
    }

    function clickHandler( ){
        
        navigate(`/Custom/${query}`)
    }

  return (
    <div >
        <div>
        
            <div>
            <input onChange={changeHandler}
            value={query}
            className=' h-[35px] w-[250px] px-6 rounded-xl bg-black text-white border-2 border-gray-400 text-[14px]'
             type="text" placeholder='Enter Your Choice...' />

             <button onClick={clickHandler}
             className='rounded-full text-[23px] relative top-[8px] right-8 text-white'>
                <BiSearchAlt2/>
             </button>
            </div>
            </div>
    </div>
  )
}

export default SearchBar
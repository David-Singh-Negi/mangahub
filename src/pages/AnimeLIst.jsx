import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import MyList from '../omponents/MyList';

const AnimeLIst = () => {

  const {anime} = useSelector((state) => state);
  console.log(anime);

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='mt-[80px]'>
        {
          anime.length > 0 ? 
          (<div>
            {
              anime.map((item,index) => (
                <MyList key={item.id} item={item} itemindex={index}/>
              ))
            }
          </div>) : 
          (<div className='flex flex-col justify-center items-center'>
            <h1 className='text-[20px] font-semibold text-white'>List is Empty</h1>
            <Link to={"/"}>
              <button className=' bg-green-600 text-white px-5 py-2 rounded-lg border-3 border-white transition duration-300 ease-in hover:bg-white hover:text-black'>
                Explore
              </button>
            </Link>
          </div>)
        }
      </div>
    </div>
  )
}

export default AnimeLIst
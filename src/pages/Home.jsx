import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom';
import Aomine from "../assets/Aomine.jpg";
import Naruto from "../assets/Naruto.jpg";
import Jujusampo from "../assets/Jujusampo.jpg";
import TopCategoriesData from '../TopCategoriesData';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='bg-white  w-screen flex flex-col  mt-[100px] lg:mt-[20px] md:mt-[20px] sm:mt-[100px] hello'>
      {/* Hero Section */}
      <div className="w-[75%] mx-auto lg:flex justify-center gap-7 md:flex-row sm:flex-col items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
        {/* Image */}
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
          {/* <img className="h-[450px] hello rounded-2xl" src={img} alt="Girl reading a book" /> */}

          <Carousel
            showThumbs={false} // Hide thumbnail navigation
            showArrows={false} // Show navigation arrows
            autoPlay={true} // Enable autoplay
            infiniteLoop={true} // Enable infinite loop
            interval={5000} // Set interval between slides (in milliseconds)
          >
            <NavLink to="/popular">
              <img
                className="h-[350px]  rounded-2xl"
                src={Naruto}
                alt="fictionimg"
              />
            </NavLink>
            <NavLink to="/airing">
              <img
                className="h-[350px]   rounded-2xl"
                src={Jujusampo}
                alt="dramalogo"
              />
            </NavLink>
            <NavLink to="/upcoming">
              <img
                className="h-[350px]   rounded-2xl"
                src={Aomine}
                alt="mysterylogo"
              />
            </NavLink>
            
          </Carousel>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='text-[35px] font-semibold text-blue-950'>MangaHub : </div>
          <div className='text-[20px]'>Explore the Latest Anime & Manga Series</div>
          <button className='mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-yellow-600 hover:text-black transition duration-200 ease-in shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
            Explore Manga
          </button>
        </div>
      </div>  

      <div className=' lg:w-[30%] md:w-[40%] sm:w-[50%] w-[80%] mt-8 px-5 py-1 bg-white  text-yellow-500 text-[25px] font-semibold rounded-full text-center mx-auto shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
        Explore More Categories
      </div>

      <div className='mt-8 max-w-[80%] mx-auto flex flex-wrap gap-x-4 justify-center items-center '>
        {
          TopCategoriesData.map((item,index) => (
            <div className='mb-8 max-w-[400px] max-h-[500px] p-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg hover:scale-105 transition duration-300 ease-in ' key={index}>

              <div className=' rounded-full'>
              <img className='h-[150px] w-[150px] rounded-full mx-auto'
               src={item.coverImage}/>
              </div>
              
              <div className='mt-3 text-[18px] text-blue-950 font-bold text-center'>
              <h3>{item.name}</h3>
              </div>
              
              <div className='mt-3 font-semibold text-gray-800'>
              <p>{item.description}</p>
              </div>

              <NavLink to={`${item.name}`}>
              <div className='mt-3'>
              <button className='font-bold flex items-center gap-2 hover:text-green-500 transition duration-200 ease-in'>
                <p className='hover:text-green-500'>Insights</p>
                <div className='text-[18px]'>
                <BsFillArrowRightCircleFill/>
                </div>
              </button>
             </div>
              </NavLink>

            </div>
          ))
        }
      </div>
          
  </div>
  )
}

export default Home;
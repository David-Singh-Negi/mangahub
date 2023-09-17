import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {MdKeyboardBackspace} from 'react-icons/md'


const AnimeModal = () => {
    const location = useLocation();
    const post = location.state.post;
    console.log("hello, Akash");
    console.log(post);
    const navigate = useNavigate();

    function clickHandler(){
        navigate(-1);
    }

    return (
        <div className=' bg-gray-300 flex flex-col flex-wrap  mt-[20px] lg:mt-[40px] md:mt-[20px] sm:mt-[100px] hello'> 

            <div className=' mt-[100px] relative left-[120px] text-[15px] font-semibold'>
                <button className=' px-5 py-[0.5rem] rounded-full text-gray-300 bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:text-red-700 duration-300 '
                onClick={clickHandler}>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div className='text-[1.5rem]'><MdKeyboardBackspace/></div>
                        <div>Back</div>
                    </div>
                    
                </button>
            </div>

            <div className='relative   text-[30px] font-bold mt-3  mx-auto'>
                Anime: {post.title}
            </div>
            

            <div className='w-[80%] mx-auto p-5 border-2 justify-around mt-5 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg mb-5   grid-cols-1   grid lg:grid-cols-2 gap-5 '>
              
            <div>
                <img className='h-[400px] w-[250px]  rounded-[5px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
                     src={post.images.jpg.large_image_url} alt="ModalImage"/>
                </div>
               <div className='flex p-3 items-center justify-between'>
              
               

                <div className='text-[18px] flex flex-col gap-[15px] mr-20'>
                <div className='flex'>
                        <div className='font-semibold'>Aired : </div>
                        <div>{post.aired.string}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Rating : </div>
                        <div>{post.rating}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Rank : </div>
                        <div>{post.rank}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Score : </div>
                        <div>{post.score}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Season : </div>
                        <div>{post.season}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Episodes : </div>
                        <div>{post.episodes}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Source : </div>
                        <div>{post.source}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Status : </div>
                        <div>{post.status}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Popularty : </div>
                        <div>{post.popularity}</div>
                    </div>
                    <div className='flex'>
                        <div className='font-semibold'>Duration : </div>
                        <div>{post.duration}</div>
                    </div>
                </div>
               </div>

               <div className=' p-4 w-full'>
                <div className='font-semibold'>
                    Synopsis : 
                </div>
                <div>
                {post.synopsis}
                </div>
               </div>

              

            </div>
        
        </div>
    );
}

export default AnimeModal;
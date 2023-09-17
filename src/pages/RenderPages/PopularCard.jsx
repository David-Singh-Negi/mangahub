import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ post }) => {
  // console.log("Inside Post");
  console.log(post);
  const navigate = useNavigate();
function handledavid()
{
  navigate(`/AnimeModal/${post.id}`, { state: { post } });
}
  return (
    <div className=" flex">
      <div className=" flex flex-col items-center justify-center border-2 rounded-[5px]
      hover:scale-105 transition duration-300 ease-in shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] relative">
        <div onClick={handledavid}>
          <img className=" h-[350px] w-[250px] border-2 border-black rounded-[5px]" src={post.images.jpg.large_image_url} alt="imalkmge" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React from 'react'

const MyList = ({item,index}) => {
  console.log("hello")
  console.log(item)
  return (
    <div>
       <div>
        <img src={item.image} alt="zooey" />
       </div>
    </div>
  )
}

export default MyList
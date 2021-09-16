import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
  const App =()=>{
    const [post,setPost]=useState();
    
    const history=useHistory();
    const getPost=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
     .then(res=>{
      const mypost=res.data;
      console.log("mypost",mypost);
      setPost(mypost);
    
  })

}
  useEffect(()=>{
    getPost();
  },[])
    return(
      <>
       <div className=" w-2/4 mx-auto px-6 py-2 bg-grey-100">
    <h2 className="text-4xl font-bold text-center  mb-8">
      Post
    </h2>
    </div>
      <div className="flex flex-wrap w-full bg-grey-50  justify-between">
      
    {
      post?.map((value)=>{
        return(
          <div className=" p-10  " >
          <div className=" bg-black text-white hover:text-black hover:bg-white h-70 w-60 shadow-md rounded-2xl cursor-pointer font-sans p-2">
          <p className=" ">{value.body}</p>
         <button className="mt-10 mx-12 p-px bg-red-600 rounded-2xl hover:bg-yello-600" 
          onClick={()=>history.push(`/post/${value.id}`)}>click me</button>
         </div>
          </div>
          
        
        )
      })
    }
      </div>
      
      
      </>
    )
  }
 export default App;
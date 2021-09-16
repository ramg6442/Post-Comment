import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Post = () => {

    const params= useParams();
    const [data,setData]=useState("");
    const [comment,setComments]=useState([]);
    let {id}=params;
     id=Number(id);

    const fetchdata=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
    const getPost=res.data;
    
    console.log("get",getPost);

    setData(getPost);


  })
 
}
const getComment=()=>{
  axios.get(`https://jsonplaceholder.typicode.com/comments`)
  .then(res=>{
   const mycomment=res.data;
   console.log("mycomment",mycomment);
   let temp=mycomment.filter(e=>e.postId===id)
   console.log("data",temp);
   setComments(temp);
  })
}
  useEffect(()=>{
 fetchdata();
 getComment();
  },[])
    return (
        <>
        <div class="flex flex-wrap justify-between mx-30  "> 
          <div className="text-4xl w-full px-2 mb-6 bg-gray-100">
            <h1 className="text-center font-bold font-sans"> Post:-</h1>
            <p className="px-8 mb-5 font-sans">Post:-{data.body}</p>
          </div>             
        </div> 

        <div className="mx-auto px-6 py-20 bg-gray-100">
           <h2 className="text-4xl font-bold text-center mb-8 font-sans">
           Comments
           </h2>
    {
          comment.map((e)=>{
            return(
              <>
              <div class="flex flex-wrap justify-between mx-30">
              <div className="w-full md:w-1/3  px-2 mb-6">
              <div className="bg-white rounded shadow py-2">
              <p className="px-8 mb-5 font-sans">Email-{e.email}</p>
              <p className=" px-8 mb-5 font-sans">Comments->{e.name}</p>
              </div>
             </div>
             </div>
    
              </>
            )
          })
        }
        </div>
        
         
        </>
    )
}


export default Post;
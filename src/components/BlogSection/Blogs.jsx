import { useEffect, useState } from "react"
import BlogCard from "../cards/BlogCard"
import { useDispatch, useSelector } from "react-redux";
import { getBlogsThunk } from "../../redux/features/blogSlice";
import Loading from "../loaders/Loading";

const Blogs = () => {

   const [blogData,setBlogData]=useState([
    {
      _id:"4844",
      author:{
        username:"raghav",
      },
      title:"My blog",
      description:"This My First Blog",
      createdAt:"2024-07-21T12:34:56Z",
      comments:[{
       author: {
          _id:"y5834",
          username:"raghav"
        },
        text:{
          comment :"this post is good"
        }
      },
      {
        author: {
           _id:"y58345",
           username:"raghav"
         },
         text:{
           comment :"this post is good"
         }
       },{
        author: {
           _id:"y58234",
           username:"raghav"
         },
         text:{
           comment :"this post is good"
         }
       }
      ]
    }
   ]);
   const dispatch=useDispatch();
   const {data,loading}=useSelector((state)=>({...state.blog}));

  //  useEffect(()=>{
  //  console.log("request dispatched for fetching blogs")
  //  dispatch(getBlogsThunk());
  //  },[])
   
  // useEffect(()=>{
  // if(data){
  //   setBlogData(data);
  // }
  // },[data])
  return (
    <>
     {
      loading ? <Loading/> :  
        <>
      <div className="main-Section-blogs m-4">
      {
        blogData?.map((e)=>{

         return <BlogCard key={e?._id} image={e?.image} video={e?.video} username={e?.author.username} location={e?.location} title={e?.title}  description={e?.description} timestamp={e?.createdAt}   />
        })
      }
      </div>
      </>
     }
    </>
  )
}

export default Blogs;

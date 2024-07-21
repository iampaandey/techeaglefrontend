import { useEffect, useState } from "react";
import FriendsList from "./friendList/FriendsList";
import FriendSearch from "./searchBar/FriendSearch";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsThunk, getMyFriendsThunk } from "../../redux/features/friendSlice";
import Loading from "../loaders/Loading";

const FriendsSection = () => {
    const [friendss, setFriendss] = useState([]);
    const [friendList, setFriendList] = useState([]);

    const dispatch=useDispatch();
    const {data,loading,friends}= useSelector((state)=>({...state.friend}))

    const addFriend=()=>{

    }


    useEffect(()=>{
     dispatch(getFriendsThunk());
     if(localStorage.getItem('token')){
      let formData={
        token:localStorage.getItem('token')
      }
      dispatch(getMyFriendsThunk(JSON.stringify(formData)))
     }
    },[])


    useEffect(()=>{
     if(data){
      setFriendss(data);
     }
     if(friends){
      setFriendList(friends);
     }
    },[data,friends])
  return (
    <>
   { loading ? <Loading/> :
      <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 font-sans">
    <h1 className="text-xl font-semibold mb-6">Find Friends</h1>
    <FriendSearch onAddFriend={addFriend} friends={friendss} friendslist={friendList} />
    <FriendsList friends={friendList} />
  </div>
  </>
}
</>
  )
}

export default FriendsSection

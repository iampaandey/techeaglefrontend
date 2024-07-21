import axios from 'axios';

const API=axios.create({baseURL: 'http://localhost:4000'});


export const login=(formData)=>{
    return API.post('/login',formData)
}

export const getBlogs=()=>{
    return API.get('/blog')
}

export const getFriends=()=>{
    return API.get('/friends');
}


export const getmyfriends=(formData)=>{
    const token = localStorage?.getItem('token');  
    return API.post('/myfriends',formData,{
        headers: {
            Authorization: token ? `${token}` : '',
            "Content-Type": 'application/json'
          },
          
    })
}
export const addBlogApi=(formData)=>{
    const token = localStorage?.getItem('token');  
    return API.post('/blog',formData,{
        headers: {
            Authorization: token ? `${token}` : '',
            "Content-Type": 'application/json'
          },
          
    })
}
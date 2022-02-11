import axios from 'axios';


const url='http://localhost:5000';

export const createArticle=async(article)=>{
    try{
     return await axios.post(`${url}/create-article`, article)
    }
    catch(error){
    console.log('Error while calling createArticle API',error)
    }
}

export const getAllPosts=async()=>{
    try{
   let response= await axios.get(`${url}/article-list`);
   return response.data;
}
    catch(error){
        console.log('Error while calling getAllPosts API',error);
    }
}

export const getArticle=async(id)=>{
    try{
        let response= await axios.get(`${url}/article/${id}`);
   return response.data  ;  
}
    catch(error){
        console.log('Error while calling getArticle API',error);
    }
}

export const updatePost=async(id,article)=>{
    try{
        let response= await axios.post(`${url}/update-article/${id}`,article);
   return response.data  ;  
}
    catch(error){
        console.log('Error while calling updateArticle API',error);
    }
}

export const deletePost=async(id)=>{
    try{
        let response= await axios.delete(`${url}/update-article/${id}`);
    }
    catch(error){
        console.log('Error while calling deletePost API',error);
    }
}

export const uploadFile=async(data)=>{
    try{
    await axios.post(`${url}/file/upload`,data)
    }
    catch(error){
        console.log('Error while calling image upload API',error);
    }
}


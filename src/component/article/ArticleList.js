import React,{useState,useEffect} from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Article from './Article';
import { getAllPosts } from '../../service/api';

function ArticleList() {
  const[articles,setArticles]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      let data=await getAllPosts();
      console.log(data);
      setArticles(data);
    }
    fetchData();
  }, []);

  return (
  <div>
  <Link to={'/api/create-article'} style={{textDecoration:'none'}}><Button style={{marginTop:20, marginLeft:20}} variant='contained' color='primary'>Create Blog</Button></Link>
   
  {articles.map((article,key)=>{
   <Link key={key} to={`/api/article-view/${article._id}`} style={{textDecoration:'none',color:'inherit'}}><Article article={article} /></Link>
  })}
    
   )
   
  </div>
   
     
    
  
   
    
      

     
   
  );
}

export default ArticleList;

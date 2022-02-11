import React, { useEffect,useState } from 'react';
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import { getArticle,updatePost } from '../../service/api';
import { useNavigate } from 'react-router-dom';



const useStyle=makeStyles({
  container:{
    padding:'0 100px',
 },
 image:{
     width:'100%',
     height:'50vh',
     marginTop:1,
     objectFit:'cover'
 },
 form:{
   display:'flex',
   flexDirection:'row',
   marginTop:10
 },
 title:{
flex:1,
margin:'0 30px',
fontSize:25
 },
 textArea:{
   width:'100%',
   marginTop:50,
   border:'none',
   fontSize: 16
 }
})

const initialValues={
  title:"",
  description:"",
  image:"",
  username:"admin",
  createdDate: new Date()

}


function UpdateArticle({match}) {
  const classes=useStyle();
  
  const[article,setArticle]=useState({initialValues});
  const navigate=useNavigate();
  
  //to view the image obove the existing image.
  const url= article.image ? article.image : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  useEffect(()=>{
    const fetchData=async()=>{
      let data=await getArticle(match.params.id);
      console.log(data);
      setArticle(data);
    }
    fetchData();
  }, [])

  const handleChange=(e)=>{
    setArticle({...article,[e.tartget.name]:e.target.value});
  }

  const updateBlog=async()=>{
    await updatePost(match.params.id,article);
    navigate.push(`/api/article-view/${match.params.id}`);
  }
  
  return(
    <div>
       <Box className={classes.container}>
         <img src={url} alt="cover" className={classes.image} />

         <FormControl className={classes.form}>
           <AddCircle fontSize="large" color="action"/>
           <InputBase placeholder='Title' className={classes.title} onChange={(e)=>handleChange(e)} name="title"></InputBase>
           <Button onClick={()=>updateBlog()} variant="contained" color='primary'>Update</Button>
         </FormControl>
         <TextareaAutosize
           rowsMin={5}
           placeholder="Write your blog here..."
           className={classes.textArea}
           onChange={(e)=>handleChange(e)}
           name="description"
           />
         
       </Box>
    </div>
  ); 
}

export default UpdateArticle;
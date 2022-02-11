import React,{useState,useEffect} from 'react';
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {createArticle,uploadFile} from '../../service/api';
import {useNavigate} from 'react-router-dom';


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

function AddArticle() {
  const classes=useStyle();
  
  const[article,setArticle]=useState(initialValues);
  const[file,setFile]=useState('');

  const navigate=useNavigate();
  
  //To view the uploaded image above the existing image
  const url= article.image ? article.image : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  useEffect(()=>{
    const getImage=async ()=>{
    if(file){
      const data = new FormData();
      data.append("name",file.name);
      data.append("file", file);

      await uploadFile(data);
    }
    }
    getImage();
  },[file])

  const handleChange=(e)=>{
    setArticle({...article,[e.tartget.name]:e.target.value});
  }

  const saveArticle=async()=>{
    await createArticle(article);
    navigate.push('/');
  }


  return(
    <div>
       <Box className={classes.container}>
         <img src={url} alt="cover" className={classes.image} />

         <FormControl className={classes.form}>
           <label htmlFor="fileInput">
           <AddCircle fontSize="large" color="action"/>
           </label>
           <input type="file" 
           id="fileInput" 
           style={{display:'none'}}
           onChange={(e)=>setFile(e.target.files(e))}/>
           

           <InputBase 
           onChange={(e)=>handleChange(e)} 
           placeholder='Title' 
           className={classes.title}
           name="title">
           </InputBase>
           <Button onClick={()=>saveArticle()} variant="contained" color='primary'>Publish</Button>
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

export default AddArticle;


import React,{useState,useEffect} from 'react';
import {Box,makeStyles,Typography} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';
import { Link,useNavigate } from 'react-router-dom';
import { getArticle,deletePost } from '../../service/api';
//import './ArticleView.css';

const useStyle=makeStyles({
    container:{
       padding:'0 100px',
    },
    image:{
        width:'100%',
        height:'60vh',
        objectFit:'cover'
    },
    icons:{
        float:'right',
    },
    icon:{
       margin:5,
       padding:5,
       border: '1px solid black',
       borderRadius:5
    },
    title:{
        fontSize: 38,
        fontWeight: 600,
        textAlign:'center'
    },
    date:{
        color:'#878787'
    },
    desc:{
        marginTop:20,
        justifyContent:'center'
    }
})

function ArticleView({match}) {
    const classes=useStyle();
    const url='https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_800x418_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542'
    const navigate=useNavigate();
    const[article,setArticle]=useState();

    useEffect(()=>{
        const fetchData=async()=>{
           let data= await getArticle(match.params.id);
           console.log(data);
           setArticle(data);
        }
        fetchData();
    }, [])
  
    const deleteBlog= async()=>{
        await deletePost(article._id);
        navigate.push('/')
    }
  
    return ( 
    <div >
        <Box className={classes.container}>
        <img src={article.pimage||url} alt="cover"className={classes.image} />
        <Box className={classes.icons}>
            <Link to={`/api/update-article/${article._id}`}><Edit className={classes.icon} color="primary" /></Link>
            <Delete onClick={()=>deleteBlog()} className={classes.icon} color="error" />
        </Box>
        <Typography className={classes.title}>{article.title}</Typography>
        <Typography className={classes.date}>{article.createdDate}</Typography>
        <Typography className={classes.desc}>{article.description}</Typography>
        </Box>
        
      
    </div>
  );
}
  
  

export default ArticleView;

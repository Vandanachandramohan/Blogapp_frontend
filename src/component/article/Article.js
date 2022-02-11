import React from 'react';
import {Box,Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
container:{
  height:301,
  width: 290,
  alignItems:'center',
  display:'flex',
  flexDirection:'column',
  margin:50,
  marginLeft:560,
  border:'1px solid black',
  borderRadius:5,
  '&>*':{
    padding:'0 5px 5px 5px'
  }
},
image:{
  height:150,
  
},

detail:{
  fontsize:14,
  wordBreak:'break-word'
}

})

const Article=({article})=> {
  const classes = useStyles();
  const url= article.picture||'https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_800x418_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542';
  return (
    <div >
      <Box className={classes.container}>
        <img src={url} alt="wrapper" className={classes.image}/>
        <Typography>{article.title}</Typography>
        <Typography className={classes.detail}>{article.description}</Typography>
        
      </Box>
    </div>

  );
  
    
}

export default Article;

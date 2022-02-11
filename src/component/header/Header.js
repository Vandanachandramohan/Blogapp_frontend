import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


function Header() {

  return(
    <div className='header'>
    <div className='headerLeft'> 
    <h2 className='headerfont'>My_Blog</h2>
    </div>
    <div className='headerCenter'>
       <ul className='topList'>
          <Link to={'/'} style={{textDecoration:'none',color:'inherit',}}><li className='topListItem'>Home</li></Link>
           <Link to={'/api/about'} style={{textDecoration:'none', color:'inherit'}}><li className='topListItem'>About</li></Link>
           <Link to={'/api/article-list'} style={{textDecoration:'none',color:'inherit'}}><li className='topListItem'>Articles</li></Link>
       </ul>
    </div>
    <div className='headerRight'>
       <Link to={'/api/Login'} style={{textDecoration:'none',color:'white'}} >Logout</Link>      
    </div>
    
</div>
  );
  
}

export default Header;

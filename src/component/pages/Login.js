import React,{useEffect, useState} from 'react';
import './Login.css';
import Validation1 from './Validation1';

function Login() {

    const [formValues1,setformValues1] = useState({email:"",password:""});
   
   
    //Manage error values
    const [formErrorValues1,setformErrorValues1]=useState({});

    //Flag for form submission
    const[isSubmit,setisSubmit]=useState(false);

const handleChange=(event) =>{
     console.log(event.target);
     const {name,value}=event.target;
     setformValues1({...formValues1,[name]:value});
     console.log(formValues1);
 }

 const handleSubmit=(event)=>{
     event.preventDefault();
     setformErrorValues1(Validation1(formValues1));
    setisSubmit(true);
 }

 useEffect(()=>{

    if(Object.keys(formErrorValues1).length===0 && isSubmit){
        alert("LogIn is successful!!");
    }

 }, [formErrorValues1])
  return ( 
<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

	<div className="login">
		<form onSubmit={handleSubmit}>
			<label htmlFor="chk" aria-hidden="true">Login</label>
			<input type="email" name="email" placeholder="Email" required="" value={formValues1.email} onChange={handleChange}/>
			<p className='error'>{formErrorValues1.email}</p>
			<input type="password" name="password" placeholder="Password" required="" value={formValues1.password} onChange={handleChange}/>
			<p className='error'>{formErrorValues1.password}</p>
			<button>Login</button>
		</form>
	</div>
	</div>
	
 
  );
  
}


export default Login;

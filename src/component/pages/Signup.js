import React,{useEffect, useState} from 'react';
import Login from './Login';
import './Signup.css';
import Validation from './Validation';

function Signup() {

    const [formValues,setformValues] = useState({username:"", email:"",password:""});
   
   
    //Manage error values
    const [formErrorValues,setformErrorValues]=useState({});

    //Flag for form submission
    const[isSubmit,setisSubmit]=useState(false);

const handleChange=(event) =>{
     console.log(event.target);
     const {name,value}=event.target;
     setformValues({...formValues,[name]:value});
     console.log(formValues);
 }

 const handleSubmit=(event)=>{
     event.preventDefault();
     setformErrorValues(Validation(formValues));
    setisSubmit(true);
 }

 useEffect(()=>{

    if(Object.keys(formErrorValues).length===0 && isSubmit){
        alert("Signup is successful!! Try logIn");
    }

 }, [formErrorValues])

  return (
  <div>
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
        {Object.keys(formErrorValues).length===0 && isSubmit? <Login />: ('')}

            {/*Signup*/}
			<div className="signup">
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange}/>
                    <p className='error'>{formErrorValues.username}</p>
					<input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
					<p className='error'>{formErrorValues.email}</p>
                    <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
					<p className='error'>{formErrorValues.password}</p>
                    <button>Sign up</button>
				</form>
			</div>


    {/*Login*/}
     <div className="login">
		<form>
			<label htmlFor="chk" aria-hidden="true">Login</label>
			<input type="email" name="email" placeholder="Email" required=""/>
			<input type="password" name="pswd" placeholder="Password" required=""/>
			<button>Login</button>
		</form>
	</div>
	</div>
  </div>
  );
}

export default Signup;
function Validation(formValues){

    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!formValues.username){
    
        errors.username="Username is required";
    
    }
    if(!formValues.email){
        errors.email="Email is required";
    
    }
    
    else if(!regex.test(formValues.email)){
    
        errors.email="Email is invalid";
    
    }
    
    if(!formValues.password){
        errors.password="Password is required";
    }
    
    else if (formValues.password.length<5){
    
        errors.password="Password must contain more tha 5 characters.";
    }
    
    return errors;
    
    }
    
    export default Validation;
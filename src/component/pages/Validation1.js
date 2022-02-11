function Validation1(formValues1){

    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    
    if(!formValues1.email){
        errors.email="Email is required";
    
    }
    
    else if(!regex.test(formValues1.email)){
    
        errors.email="Email is invalid";
    
    }
    
    if(!formValues1.password){
        errors.password="Password is required";
    }
    
    else if (formValues1.password.length<5){
    
        errors.password="Password invalid";
    }
    
    return errors;
    
    }
    
    export default Validation1;